---
title: "搭建个人数据仪表盘与手机端 AI 教练"
date: 2026-10-06T02:05:00+08:00
draft: false
categories: ["工作"]
tags: ["个人数据", "AI教练", "习惯追踪", "自我提升"]
---

> **TL;DR (EN):** Built a local personal-data dashboard and a mobile-ready prompt that turns an AI assistant into a coach/analyst. The workflow is intentionally simple: record data first, then run daily, weekly, and monthly reviews based on evidence rather than vague motivation.

## 今日完成

- 建立本地个人数据仪表盘，覆盖健康、睡眠、运动、饮食、情绪、压力、学习/工作投入和习惯追踪。
- 在文档末尾加入 AI 协作规则，明确 AI 只能基于已记录数据分析，不编造趋势、不做医疗诊断、每次最多给 3 个行动建议。
- 创建 `personal-ai-coach` 工作规则，后续做个人数据复盘时可以直接调用。
- 生成手机端 AI 教练 Prompt，可配合个人数据文档在移动端使用。

## 数据 / 结果

- 形成的闭环是：记录数据 → AI 分析趋势 → AI 找出最大短板 → 给一个最小行动 → 下周用数据验证。
- 每日复盘输出：肯定 1 点、调整 1 点、明天 1 个行动、缺什么数据。
- 每周复盘输出：数据事实、可能规律、最影响状态的因素、下周只改一件事。
- 每月复盘输出：关键指标变化、目标进展、停止/继续/开始事项、下个月 3 个可量化目标。

## 问题与卡点

- 当前最缺的是连续数据；先记录 7–14 天，再谈长期趋势。
- 健康类数据涉及隐私，个人数据文档只适合保存在本地或私有加密空间，不能同步到公开博客。
- 手机端如果要真正变成“主动教练”，后续还需要接入提醒渠道；目前先采用手动记录 + 定期 AI 复盘的方式。
