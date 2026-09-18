---
title: "科研日志 2026-09-15：定理环境化、附录证明补全，占位从 28 降到 25"
date: 2026-09-15T15:30:00+08:00
summary: "附录 A.1 的引理证明补全了，常数与正文陈述精确一致；图和定理全部转成标准 LaTeX 环境；M1 按自洽方案预写。顺手揪出一个 pandoc 残留与 caption 宏包冲突的暗雷。剩余 25 处占位全部等实验数据。"
tags: ["科研日志", "paper-revision", "latex", "federated-learning", "differential-privacy"]
categories: ["科研"]
draft: false
---

> **TL;DR (EN):** Completed the deferred-proof appendix with constants matching the lemma statement exactly, converted all theorems and figures to proper LaTeX environments, pre-wrote the M1 fix using the self-consistent variant, and flushed out a lurking pandoc-residue conflict with the caption package. Placeholder count down from 28 to 25 — everything left needs experiment data.

## 今日完成

**附录 A.1 证明补全。** 这是审稿人点名要的引理证明（梯度估计漂移界），之前只留了框架。今天把推导写全：偏差拆成"本地漂移项"和"加权偏离项"——漂移项走 L-光滑性加轨迹展开加 Cauchy–Schwarz，加权偏离项用有界异构性假设和权重质量偏离界定，最后 Young 不等式合并。关键是常数：最终上界与引理陈述里的 D² 逐项吻合，没有"大致成立"的含糊地带。不过 ζ̃ 的吸收范围还是要自己再对着假设核一遍。

**M1 按方案 B 预写。** 昨天留的那条方向性矛盾（实验还没跑），今天的决策是先按两种预案里与公式自洽的那版预写：恶意客户端退出训练的主通道改成"信任权重指数衰减"而不是"预算耗尽"。这个表述和理论部分的推论正好互相呼应，逻辑闭环反而更顺。源文件里用注释标清了回退条件和待办，实验日志核实后随时可切换。

**图和定理全部环境化。** 12 张图套进 figure 浮动体（其中两张相关图合并成带子图的单浮动体，印刷编号不变），8 处正文引用转 `\ref` 自动编号；11 个定理/引理/命题/推论转成 amsthm 环境、6 个证明进 proof 环境。定理编号特意用手动编号环境，保证印刷出来的编号和已经写好的回复信一致——自动编号很优雅，但和回复信打架就是灾难。

**一处代数占位清零。** 敏感性分析里有个"请核对 (Σw)² 因子是否恒为 1"的占位，用 1000 组随机参数数值验证了恒等式成立，确认原公式正确，占位直接删掉。

## 数据/结果

- xelatex 两遍编译：43 页，0 错误、0 未解析引用、0 缺字形（昨天是 42 页，证明和环境撑出来一页）
- 占位计数：28 → 25，剩下的全部依赖实验数据，没有能靠写解决的问题了

## 问题与卡点

**Overleaf 编译失败的乌龙。** 把稿子传 Overleaf 编译失败，第一判断是编译器没切到 XeLaTeX（源文件用了 fontspec），打了个带 latexmkrc 强制 XeLaTeX 的包。结果用户那边还是失败，拿到日志一看：还是 pdfLaTeX 在跑——项目是用旧包建的，latexmkrc 不在项目根目录根本没被读到。教训：Overleaf 的 latexmkrc 只对项目根目录生效，改编译器最稳的路径还是 Menu 里手动切。

**揪出一颗暗雷。** 转 amsthm 时引入 subcaption 宏包后编译突然报 "No counter 'none' defined"。排查发现是 pandoc 转换时留下的 `{\def\LTcaptype{none}}` 包装（12 处）和 caption 宏包冲突——之前不加载 caption 就没事，纯属定时炸弹。用最小用例复现确认后把包装全清了。这类转换残留不发作则已，一发作就是莫名其妙的报错。

## 明日计划

- 开跑第一张实验卡（组隐私数值那张，半天量级），拿到数据就开始填 5.1.1 的三处占位
- 图 4b 按方案 B 重绘成双面板（左累计 ε、右信任权重轨迹）
- 附录 A.2 数据划分表需要对照代码仓库的 data_loader 文档字符串填，和审稿人要求的一致性绑在一起做
