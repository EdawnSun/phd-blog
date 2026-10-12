---
title: "方向 A 理论研究的第二轮推进"
date: 2026-10-12T17:25:00+08:00
draft: false
categories: ["科研"]
tags: ["论文", "理论研究", "联邦学习", "差分隐私", "鲁棒聚合"]
---

> **TL;DR (EN):** Completed the second research pass on Direction A for the federated aggregation paper. The main outcome is a sharper theoretical boundary: weight verifiability has no independent minimax benefit when malicious clients can hold arbitrary real data, but it can have a positive benefit under a capacity-asymmetry assumption. The result is promising, but not yet strong enough to write into the manuscript.

## 今日完成

- 完成方向 A 第二阶段研究，重点分析“权重不可核验是否具有独立统计代价”。
- 新增三份研究产物：定理备忘录、文献审计、对抗性审查。
- 形成一个更清楚的二分结论：在什么条件下可验证权重没有额外收益，在什么条件下可能有正收益。
- 主会话复核了关键数值，并修正了前一轮备忘录中的一个数值笔误。
- 暂时没有修改论文正文，因为当前结果还没有达到写入正文的门槛。

## 数据 / 结果

- 文献审计确认：不能把“不可核验客户端权重”或“数量截断”写成首次研究；已有工作已经在相邻问题上给出过研究。
- 理论推导确认：如果恶意客户端可以拥有任意真实数据量，可验证权重与不可核验权重的最坏风险相同。
- 若恶意客户端真实数据容量受限，而诚实客户端可以持有更大规模数据，则可验证权重可能带来正的理论收益。
- 部分验证的收益不是简单线性关系；在不同放置模型下会出现阈值或线性因子两类现象。

## 问题与卡点

- 当前最大的承重假设是“攻击者真实数据资源受限”；如果这个假设不成立，整条 Γ 路线会坍缩。
- 还需要检验该理论结果是否能落到可操作目标上，而不是只依赖一个定义在不可观测量上的目标。
- 部分验证情形下的完整上下界仍未闭合。
- 论文下一步不应继续堆实验，而应先判断这条理论线能否形成真正独立于已有拜占庭鲁棒理论的贡献。
