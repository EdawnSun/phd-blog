---
title: "TEE 论文合并稿复审与摘要结论修订"
date: 2026-10-06T01:35:00+08:00
draft: false
categories: ["科研"]
tags: ["论文", "联邦学习", "差分隐私", "可信执行环境", "审稿"]
---

> **TL;DR (EN):** Completed a multi-perspective review of the merged TEE federated-load-forecasting manuscript, produced a formal review and revision worklist, and rewrote the abstract/conclusion so they match the latest experimental evidence: the protocol is feasible, but the full method is not superior to simpler DP baselines, the triggerable gate is not an effective defense, and real TEE deployment remains unverified.

## 今日完成

- 完成 TEE 合并稿的五席位复审：期刊匹配、方法学、领域、立场和对抗性审稿。
- 汇总形成编辑综合意见、正式同行评审版和后续工作清单。
- 核查实验证据链：首批 377 次任务中 367 次完成、10 次失败保留；后续与前期任务合计 691 次记录；工程测试通过。
- 将论文摘要与结论改为与最新实验章一致，并覆盖回原稿，另保留覆盖前备份。

## 数据 / 结果

- 论文当前证据支持的结论：协议能稳定完成训练，并避免无防御 FedAvg 在数量增强投毒下数值发散。
- 论文当前证据不支持的结论：Full 或 NoGate 优于 DP-Mean、DP-Center 等更简单基线。
- 可触发门控未表现出有效攻击区分，且造成较高诚实隔离，因此不能再按“门控已验证有效”来写。
- 摘要和结论现已明确：本文定位为协议可行性、数量约束作用与适用边界评估；真实 TEE 安全性与工程开销仍待硬件平台验证。

## 问题与卡点

- 论文仍需补整体架构图，把客户端、服务器宿主、TEE enclave、账本与发布边界画清楚。
- 参考文献目前仍偏少，需要扩到至少 25–35 条，重点补客户端级 DP、鲁棒聚合、SecAgg、TEE+FL 和负荷预测隐私方向。
- 实验侧最关键的补充是 local-only 基线、DP-BREM 式对照，以及固定噪声或无噪声诊断。
- 论文最短修改路线已经明确：先统一叙事和结构，再补关键对照，不要继续无方向堆实验。
