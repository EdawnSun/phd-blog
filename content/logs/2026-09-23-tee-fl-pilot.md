---
title: "2026-09-23 TEE 联邦实验工程与首轮预实验"
date: 2026-09-23T00:00:00+08:00
draft: false
categories: ["科研"]
---

> **TL;DR (EN):** Built and validated a standalone `tee_fl` research project for client-level DP robust federated load forecasting; tests, smoke run, and a 14-task development pilot completed, but formal experiments remain gated because the confirm cohort is not ready.

## 今日完成

- 按确认后的实验边界创建了独立工程 `tee_fl`，用于客户端级差分隐私鲁棒联邦负荷预测的功能模拟实验；没有复用旧 IFDPFL、记录级 DP 或孤立森林实现，只复用已审计的数据文件和来源 manifest。
- 工程采用 src 布局，包含数据、模型、客户端训练、聚合、门控、隐私账本、攻击、协议、评测和 runner 模块；所有 TEE 相关内容只标为 functional simulation，不伪造硬件隔离或远程证明。
- 实现并跑通命令接口：audit-data、pytest、smoke、pilot、freeze、summarize、run-matrix 冻结校验。当前 freeze 正确拒绝，避免把 design-only 清单直接当正式配置启动。

## 数据与结果

- London 开发数据审计完成：旧 210 户只作为开发集；按新协议重新分成 5 户一个逻辑聚合商；训练期覆盖率门槛下有 28 个开发逻辑客户端合格。
- 测试结果：19 项测试全部通过，覆盖投影、RDP 会计、账本去重、门控触发/恢复、聚合敏感度、非法输入映射、攻击边界、窗口与标准化边界、冒烟输出。
- 冒烟实验完成；开发预实验跑了 14 个训练任务，0 失败、0 排队。只计算开发验证指标，没有计算正式测试指标。
- 耗时估算显示，正式 P1+P2 的 215 次任务按实测缩放后超过 8 小时首轮边界，全部 544 次更久。

## 问题与卡点

- 确认队列仍未从全量 London 源包重建，因此正式协议状态保持 not_ready。
- Electricity 外部复现数据还没有下载和审计。
- 后续不能直接启动正式矩阵；需要先完成确认队列和外部数据审计，再重新 pilot/freeze，并在明确批准长批次后分阶段运行。
