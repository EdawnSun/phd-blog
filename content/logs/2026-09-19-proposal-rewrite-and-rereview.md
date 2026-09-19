---
title: "2026-09-19 工作日志"
date: 2026-09-19
draft: false
tags: ["工作日志"]
categories: ["工作", "科研"]
---

> **TL;DR (EN):** Rewrote the project-objectives section and Tasks 7/8 of the 6G agent-security proposal following a reference template (Task 7: prototype system + three pilot scenarios; Task 8: standards research with four artifact-named subtasks); ran a four-seat simulated re-review of the revised manuscript and synthesized an editorial decision with a three-tier fix roadmap; shipped the work/research two-category restructure of this blog.

## 今日完成

**6G 智能体安全项目（申报中）**

- 改写项目目标：架构改为顶层统领提法（统一两类协同场景的身份/信任/威胁模型与接口规范），成果单列成段，新增成果应用与影响段（应用方式+行业+科技/经济/社会/国防安全四个维度），回应合作方批注。
- 任务 7 推翻重写：仿参考模板"XX研发及典型场景应用验证"的起名与五段式结构（研究目标/研究内容/关键问题/考核指标表/分工表），场景定为两个电力场景（变电站机器人集群协同、端侧大模型协同推理）+ 一个移动 6G 试验网场景（个人端侧智能体接入）。
- 任务 8 推翻重写为「标准规范研究」：四个子任务分别对应四项关键技术任务，产物式命名（评估方法/接口规范/检测审计规范/管理流程），每条按"针对…根据…基于…梳理…研制…"的参考句式，基于各技术任务原文逐条重写。
- 处理合并稿批注：49 条批注分类归拢（综述结构/成果写法/缺图/AI 痕迹/字数），逐条落实了其中属于文本改写的部分。

**在审论文修订稿**

- 对修订稿跑了一轮四席位模拟复审（主编/方法论/领域/魔鬼代言人），方法论席位用代码独立复算了理论数值。
- 产出编辑综合决定信：Major Revision，魔鬼代言人五条 CRITICAL 逐条裁决，修改路线分三层（立即可修 12 项/依赖实验 8 项/叙事建议 5 项）。

**博客**

- 博客按工作/科研两类重组上线：分类标签方案（taxonomy），菜单改为四个分类入口，存量文章全部归类，已发布 URL 零变动。

## 数据/结果

- 复审发现三处硬伤都经我亲自复核确认：头条数字两处口径不一致、一处定理常数错 2 倍、一处核心公式排版断裂——纯文本核对即可查出，复审成本远低于返修成本。
- 任务 7 重写稿正文约 2600 字+两张表；任务 8 重写稿正文约 2200 字+两张表，四个子任务各 200-400 字。

## 问题与卡点

- Word 文件占用锁反复打断自动写入：合并稿和重写稿被 Word 打开时无法落盘，后来改成"先给文字、用户关文件后写入"的两段式协作。教训：改 docx 前先查 WINWORD 进程。
- 申报书改写的高效路径是"拿到技术任务原文→按参考条目句式映射→产物命名收尾"，比凭空起草返工少；反之没有原文只能写虚。
- 论文复审的 B 层 8 项全部卡在真实实验数据上，无捷径。
