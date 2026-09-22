---
title: "2026-09-22 工作日志"
date: 2026-09-22
draft: false
tags: ["工作日志"]
categories: ["科研"]
---

> **TL;DR (EN):** Aggregated the first 350 real experiment runs into a Word-version experiment section and re-planned the experiment matrix around what the evidence actually supports (trust weighting, not dynamic noise, carries robustness); implemented and validated a trust×robust-aggregation hybrid that fixes the adaptive-attack collapse (+317% → +4.6% degradation); ran two four-seat simulated reviews of two manuscript variants (server-side-noise and TEE-restructured), both Major Revision with the TEE version structurally healthier; analyzed the stalled BehavID paper project (submission-ready, two broken figures); sketched a shadow-model agent-security follow-up direction with a reading list.

## 今日完成

**在审论文：真实实验与实验部分重构**

- 聚合首批 350 次正式运行（2 数据集 × 7 方法 × 5 攻击 × 5 种子）的真实结果，生成《实验部分-首批真实结果》Word 文档（8 节 9 表，全部数字可溯源）。
- 关键转折：真实数据显示鲁棒性主通道是信任加权而非动态噪声；干净场景 London 上各方法不可区分（负结果）；自适应历史攻击在 GEFCom 上加权平均类方法全线退化。占位稿故事线（8.5% 退化、10% 转折点、AUC 0.99）全部撤回。
- 重规划实验部分：故事线对齐 + 新矩阵 E1'–E10' + 主张-实验追溯表 + 阶段关卡，落盘 plan/ 三份文件。
- 零算力提取完成：信任权重轨迹与累计 RDP 轨迹图（PNG+SVG）、逐轮耗时表。两个阴性发现如实记录：恶意权重只降到诚实端约 0.7 倍（非"指数衰减静默移除"）；σ 与客户端可预测性相关性不显著。
- 实现信任比率缩放×鲁棒聚合的混合变体（ifdpfl_median/ifdpfl_trimmed），40 次运行验证：自适应攻击退化从 +317% 压到 +4.6%，把最大软肋转成贡献候选。11/11 单测通过。
- 修复批跑失败：汇总函数分组键缺攻击强度/比例字段导致同组冲突，修复后 E3b 恶意比例扫描 + E3c 预算扫描批跑链已重启（约 28h，后台运行中）。

**两版稿件的四席位模拟评审（只评方案价值）**

- 服务器端加噪版：Major Revision。四条 CRITICAL——注噪位置与威胁模型错位（三席共识+复核成立）、邻接定义混用致敏感度低估、空白声称过度（检出在先耦合工作）、噪声下检测前提未建立。
- TEE 重构版：Major Revision 但无方向性死伤。上一版两条致命伤在结构上已修复；遗留为信任假设论证缺失、与 DP-BREM 的增量区分、TEE+FL 文献地图缺三块。两版综合裁决均落盘 reviews 目录。

**其他**

- 分析 BehavID 项目（行为身份/因果结构防生成式模仿攻击，AIoT 方向）：研究内容 100% 完成、v5.2 待投稿，卡在两张 tikz 图编译错误 + 两版本不同步 + 数字未独立复核；给出接手路线（修图→对齐版本→核数字→投稿清单）。
- 新方向探讨：梳理"影子模型并行检测+检测完放行"方向的在先工作（SelfDefend 等），给出分层学习资料清单与方案骨架（可逆性分级投机放行 + 信任驱动检测预算分配）。

## 数据/结果

- 真实实验聚合：350 runs 首批 + 40 runs 混合变体验证，全 5 种子完整。
- 混合聚合：GEFCom 自适应攻击 MAE 29.8 → 7.49（退化 +317% → +4.6%）。
- 评审产出：2 份编辑综合裁决 + 8 份分席报告。
- 代码改动：聚合器扩展 + 汇总分组键修复 + 套件支持逐档攻击比例/预算扫描/逐轮验证日志，测试 11/11 通过。

## 问题与卡点

- 批跑链曾因套件参数组合的分组键缺陷中断一次，已修复并确认缓存续跑正常。
- E2 收敛曲线无逐轮验证误差日志，已加 eval_every 开关，数据随本次批跑采集。
- BehavID 项目停滞三个半月，当前 PDF 是在 6 个编译错误下产出的。
