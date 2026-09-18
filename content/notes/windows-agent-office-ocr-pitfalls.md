---
title: "Windows 下让 Agent 操作 Office 与 OCR 的三个坑"
date: 2026-09-18
draft: false
tags: ["研究笔记", "工具链"]
categories: ["工作", "科研"]
---

> **TL;DR (EN):** Three Windows pitfalls when letting an agent handle Office docs and OCR: use `DispatchEx` (not `Dispatch`) for Word COM, Tesseract ships without Chinese language data, and GitHub push needs a mirror prefix when direct access times out.

## 坑一：Word COM 必须用 DispatchEx，不能用 Dispatch

**问题**：用 `win32com.client.Dispatch("Word.Application")` 在后台转换 .doc 到 .docx，进程直接挂死，五分钟无响应。

**原因**：`Dispatch` 会附着到用户正在运行的 Word 实例上。如果那个实例弹了模态对话框（兼容模式提示、文件锁定提示等），而 COM 会话又是 `Visible=False`，对话框永远没人点，调用就永远阻塞。

**解法**：用 `DispatchEx` 启一个独立的 Word 实例，并关掉所有弹窗：

```python
import win32com.client
w = win32com.client.DispatchEx("Word.Application")
w.Visible = False
w.DisplayAlerts = 0
doc = w.Documents.Open(src, ConfirmConversions=False, ReadOnly=True)
doc.SaveAs2(FileName=dst, FileFormat=16)  # 16 = docx
doc.Close(False)
w.Quit()
```

**要点**：如果用户可能正开着原文件（目录下有 `~$文件名` 锁文件），先复制一份到临时目录再操作，别碰原件。

## 坑二：Tesseract 默认不带中文语言包

**问题**：`tesseract img.png out -l chi_sim` 报错 "couldn't load any languages"，检查 `--list-langs` 只有 eng 和 osd。

**解法**：从 tessdata_fast 仓库下载 `chi_sim.traineddata`（约2.4MB），放到任意可写目录，用 `--tessdata-dir` 指定：

```bash
tesseract img.png out -l chi_sim --tessdata-dir "C:/path/to/tessdata" --psm 6
```

**要点**：不要试图往 `C:\Program Files\Tesseract-OCR\tessdata` 里写，权限问题会浪费你十分钟；`--psm 6` 适合表格截图，`--psm 11` 适合稀疏排版的图片（比如框架图）。

## 坑三：本机直连 GitHub 超时，推送要走镜像

**问题**：`git push origin main` 直连 github.com 超时失败；`gh api` 同样不可用。

**解法**：远端 URL 加镜像前缀，推送脚本里写死：

```bash
git push https://ghfast.top/https://github.com/<user>/<repo>.git main
```

**要点**：验证远端状态时也别用 `gh api`，用 `git ls-remote <镜像URL>` 或直接 curl 页面。推送被拒（远端有新提交）时，`git pull --rebase <镜像URL> main` 同样要走镜像。
