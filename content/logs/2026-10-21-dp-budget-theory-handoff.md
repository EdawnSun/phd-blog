---
title: "DP 预算调度论文的理论证明推进、交接文档与版本判断"
date: 2026-10-21
draft: false
categories: ["科研"]
tags: ["联邦学习", "差分隐私", "论文写作", "隐私证明", "项目管理"]
---

> **TL;DR (EN):** Today’s work pushed the DP budget-scheduling paper through several final correction rounds and a full privacy-proof drafting pass. The theory appendix is now independently reviewed as a coherent draft, but the formal experiment remains unauthorized and the manuscript is still not submission-ready. I also organized two related project folders, generated an AI handoff document, and compared the three manuscript lines; the TEE version is currently the closest to a publishable journal paper if repositioned as a protocol-and-boundary study.

## 今日完成

- 继续处理 DP 预算调度论文的多轮定点修订，修复了失败分支表述、零方差与退化自助输出规则、实现一致性汇总表和归档版本记录。
- 完成隐私理论推进工作：分别整理形式化协议与全历史条件机制、双向会计与本地多步组合、自适应组合与停止转录、理想模型与实现差异边界。
- 汇总生成五项 command6 正式交付物：隐私证明附录草稿、引用假设映射表、O1–O6 证据与状态表、正文建议 diff、最小残留清单。
- 完成 command6 最终独立验收，结论为通过；验收发现的两项非阻断问题已修正，包括参考文献编号冲突和项目环境表述过宽。
- 生成了可直接交给外部 AI 或协作者的论文交接文档，覆盖已完成工作、下一步工作、当前难点、踩坑、不能做的事和关键文件索引。
- 整理了“修改场景版”和“TEE版本”两个历史项目文件夹，生成整理索引和移动明细；其中发现的疑似令牌文件已单独隔离。
- 将两份 Word 稿件转换成 Markdown，便于后续审查、交接和版本比较。
- 对三个版本的论文路线做了判断：TEE版本当前最接近可继续推进的期刊论文，但必须从“更优方法”改写为“协议可行性与适用边界研究”。

## 数据与结果

- DP 预算调度论文的最新正文仍是 2026-10-21 修订版；正式实验状态保持 NOT AUTHORIZED，投稿准备保持 NOT READY。
- command6 的五项理论交付物已通过最终独立验收，但这只表示“可提交后续审核的理论草稿成立”，不表示 O1–O6 已闭合。
- 隐私证明草稿已经具备完整结构：对象定义、全历史论证、双向会计、本地多步组合、联合发布、自适应组合、停止转录和实现差异边界均已形成书面材料。
- 实现层仍未闭合：失败轮预留持久化、随机数派生独立性、会计浮点误差方向、噪声有限精度、求根边界测试都还需要后续处理。
- TEE版本的完整合并稿包含真实实验与理论分析，是当前三个版本中完成度最高的一条线；但其核心方法不优于简单基线，门控未触发，TEE 也只是软件模拟。
- DP 预算调度版本的研究治理和证据边界最强，但路线 A/B 尚未决定，当前不适合作为最快投稿版本。

## 问题与卡点

- DP 预算调度论文的最关键卡点仍然是核心效用假说没有被开发实验支持，下一步不是继续堆文字，而是先决定走机制边界与失败诊断路线，还是继续保留方法创新路线。
- 隐私证明虽然已经形成完整草稿，但理想协议与实际实现之间仍有实质差距，尤其是运行期失败信道和随机数派生独立性。
- TEE版本要变成可投稿论文，需要重写摘要、引言和结论，把实验事实回写进去，并把贡献从“性能优势”降级为“敏感度分析、协议可行性与边界证据”。
- 修改场景版的直观 idea 最容易讲，但注噪位置、邻接定义、空白声称和检测可靠性问题都比较重，不建议直接作为主版本继续推进。
- 今天再次确认一个重要教训：文档验收通过、正式实验准入和投稿准备是三件不同的事，不能因为交付物 PASS 就把状态写成实验或投稿已经就绪。
