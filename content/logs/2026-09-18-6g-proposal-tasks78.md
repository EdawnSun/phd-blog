---
title: "2026-09-18 工作日志"
date: 2026-09-18
draft: false
tags: ["工作日志"]
---

> **TL;DR (EN):** Drafted the Task 7 (prototype & pilot) and Task 8 (standardization) sections of the 6G edge-agent security proposal: goals/metrics with evaluation methods, 300-char research contents, 200-char methodology paragraphs, per-task KPI tables, two layered framework figures, ~3000-char full task write-ups, and reformatted the merged draft doc (heading fonts, indent, spacing, section breaks).

## 一、今日完成

- 生成《2-1-2项目目标及考核指标.docx》：项目目标总述 + 8条考核指标逐条展开（数值对齐指南）+ 表2-2成果对应关系 + 表2-3指标分解及测评方式。测评方式落到可操作层面：指标1拒绝率按≥10000次伪造尝试统计，指标4正确率提升按开/关审计对照实验测算，指标6按GB/T 25000.51-2016第三方检测+用户盖章应用证明。
- 场景口径更新：验证场景为3类——2个电力行业场景（南网，具体待定）+1个移动6G试验网场景（工大），超出指南"不少于2类"要求；原手机AI助手方案作废。
- 任务7、8系列产出：研究内容各300字（统一为"总起句+引导句分述"式）、拟采取方法各200字（2-2-2-1）、10列考核指标表（模仿参考表2-3，前5列纵向合并）、两张分层配图（任务7系统集成与验证思路图、任务8标准体系框架图，matplotlib 300dpi PNG）、各任务内容详稿各约3000字（五段式）。
- 过程稿排版：总.doc经Word COM转docx后排版——一二三级标题黑体四号、正文宋体小四+首行缩进2字符+1.5倍行距、每个一二级标题前插分节符（16个），产出总-排版后.docx并抽查验证。

## 二、数据/结果

- 交付文件5份（均在 26.9.18-第一版过程稿 目录）：2-1-2项目目标及考核指标、任务7-8考核指标表、任务7/8配图各1张、2-3-2任务7-8各任务内容（任务7约2740字、任务8约2650字，含标点）、总-排版后.docx（681段，32节）。
- 全部docx经 docx_validate 校验通过；两张图经OCR回检元素齐全无溢出。

## 三、问题与卡点

- Q17未答：撰写模板第一/三/四/五部分标题待确认。
- Q18未答：重庆邮电大学主责任务4/5/6与"避免交叉承担"原则的冲突待确认。
- 坑与解法：Word COM须用DispatchEx独立实例（Dispatch会附着用户已开的Word挂死）；Tesseract本机只有英文包，中文OCR需另下chi_sim并指定--tessdata-dir（两条已记入docx技能）。
- 待办标记：两张图编号"图X"待统稿；2-1-2中"（具体场景待定）"定稿前删除。

## 四、明日计划

- 收齐Q17、Q18答案后更新撰写分工表与分工矩阵。
- 视组队进展，补全任务1-6的五段式详稿。
- 跟进南网两个电力场景的具体选定。
