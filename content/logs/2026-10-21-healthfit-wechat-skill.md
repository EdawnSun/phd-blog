---
title: "把微信个人健康助手改造成可复用 Skill 并发布到 GitHub"
date: 2026-10-21
draft: false
categories: ["工作", "科研"]
tags: ["Hermes", "Agent Skill", "健康助手", "微信", "个人数据"]
---

> **TL;DR (EN):** I reworked my WeChat-based personal health assistant into a reusable Hermes Agent skill, initialized its local data structure, connected the scheduled daily/weekly coaching jobs to it, and published a sanitized public version on GitHub.

## 今日完成

- 梳理了现有微信健康助手的真实需求：它应该优先服务训练、营养、睡眠、恢复和复盘，而不是做成一个功能过多的大菜单。
- 对比了第三方 HealthFit skill 的设计，决定不原样安装，而是按自己的数据和微信使用习惯做本地改造版。
- 新建了 `personal-healthfit-wechat` skill，作为微信健康助手的专用规则层。
- 明确了数据来源关系：`个人数据仪表盘.md` 仍然是主事实来源，新的 `healthfit/` 目录只作为程序计算和结构化路由的派生数据层。
- 初始化了本地健康数据结构，包括基础档案、目标配置、每日记录目录、复盘目录、原始识别结果目录和隐私记录文件。
- 把每日晚间打卡提醒和每周复盘两个定时任务切换到了新 skill。
- 调整了定时任务提示词，让它们读取仪表盘、`profile.json` 和 `goals.json`，并保持微信回复简短。
- 将 skill 整理成脱敏通用版，发布到公开 GitHub 仓库：  
  https://github.com/EdawnSun/personal-healthfit-wechat-skill

## 数据与结果

- 新 skill 已在本地 Hermes 中启用，可以被健康打卡、训练截图、睡眠截图、体脂秤截图和食物照片等输入触发。
- 每日 22:30 的晚间打卡任务已经改用 `personal-healthfit-wechat`。
- 每周日复盘任务也已经改用 `personal-healthfit-wechat`。
- 本地数据目录初始化结果正常，`profile.json`、`goals.json` 和隐私记录文件均已生成。
- 公开 GitHub 版本不包含真实健康数据、本机个人路径、聊天标识、API 密钥或任何真实隐私记录。
- 公开仓库已验证为 PUBLIC，默认分支为 `main`。

## 问题与卡点

- 当前 skill 还只是“规则层 + 数据结构层”，还不是完整的自动识别系统；后续还需要继续增强 OCR、食物识别和结构化写回的稳定性。
- 微信已有长会话需要重新加载 skills 或开启新会话后，才能稳定识别新 skill。
- 公开版本只能作为通用框架，真实个人目标、身体数据和历史记录仍应只保存在本地。
- 后续如果要做得更好，重点不是增加更多功能，而是提高三件事：识别准确率、记录一致性、反馈的可执行性。

## 下一步

- 继续观察微信打卡中新 skill 的实际触发效果。
- 把睡眠、训练、Apple 健身和体脂秤截图的字段提取做得更稳定。
- 将食物照片估算结果更规范地写入每日记录。
- 在每周复盘中加入更明确的趋势判断和下周单一改进动作。
