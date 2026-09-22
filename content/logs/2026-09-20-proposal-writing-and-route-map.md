---
title: "2026-09-20 工作日志"
date: 2026-09-20
draft: false
tags: ["工作日志"]
categories: ["工作", "科研"]
---

> **TL;DR (EN):** Rewrote Task 8's four subtasks of the 6G agent-security proposal into a standards-only, patent-free formulation; generated technical-route and research-content paragraphs for Tasks 7/8 by imitating a reference passage, four innovation points (theory/tool/application/framework), and a proposal–guideline alignment paragraph verified against the original guideline document; rebuilt Task 7's technical route map as an editable PPTX from a screenshot via positioned OCR and pixel-level palette analysis; diagnosed an Overleaf build failure (ctexart fandol fontset requires XeLaTeX).

## 今日完成

**6G 智能体安全项目（申报中）**

- 任务 8.1 重写：按"去技术化、去专利、落点只留标准"的口径改写，保留"调研现状→梳理需求→提出框架→形成草案→推动立项→试点校验"的标准化工作链条；随后 8.2/8.3/8.4 按同口径同步，四条子任务结构完全同构，并指出总起段"布局知识产权"表述与新口径冲突、建议改为"推动标准立项"。
- 任务 7.3 三个小段描述（系统部署/应用验证/成效分析，各约 15 字）。
- 仿"网络数据标签标识"参考段的五拍结构（现状分析→技术手段→设计破解→方法突破→机制成形），分别为任务 7、任务 8 生成具体技术路线段落。
- 仿参考段"研究……具体包括"四段式结构，生成任务 7、任务 8 的研究内容段落；任务 8 为对齐四拍节奏把认证与授权两条子任务合并表述。
- 从理论、工具、应用、框架四个角度生成项目主要创新点四条（信任评估与动态授权理论 / 五类安全能力无感集成原型工具 / 多场景体系化试点验证模式 / 端网协同分层分域安全体系框架），分别对应任务 2/3、任务 7.2、任务 7.3、任务 1。
- 生成"申报项目与所属指南的关联关系"段落，动笔前对指南 docx 原文逐条核对，确保转述的指南研究内容有出处；指南七项技术研究内容全部落到聚焦清单，清单顺序与任务分解一致。
- 生成任务 7 技术路线图 PPTX：参考图无法直接读取，用 OCR（定位 TSV）+ 像素级配色分析还原版式（顶部棕色问题行、三条青/蓝/绿任务带、左右竖排侧栏、底部验证收束条），再用 python-pptx 绘制原生可编辑形状，并经 PowerPoint 渲染回图自查确认版式无误。

**在审论文**

- 排查 Overleaf 编译失败：原因为项目本地用 XeLaTeX 而 Overleaf 默认 pdfLaTeX，ctexart 的 fandol 字体集在该模式下不可用；给出切换编译器和 latexmkrc 固化两种解法。

## 数据/结果

- 文字产出：任务 7/8 技术路线段落各 1 段、研究内容段落各 1 段、创新点 4 条、指南关联关系段落 1 段、任务 8 子任务改写 4 条、任务 7.3 小段描述 3 条，共约 4000 字申报书素材。
- 技术路线图 PPTX 1 份（13.19×9.68 英寸，原生形状，可编辑），PowerPoint 渲染回图（1319×968）逐区自查通过。
- 指南关联段落中提及的指南研究内容逐条核对指南原文 docx，覆盖率 7/7。

## 问题与卡点

- 任务 1 参考技术路线图为截图，无可编辑源文件，只能靠 OCR + 像素分析还原版式，个别竖排侧栏文字识别噪声较大，配色与结构已校准。
