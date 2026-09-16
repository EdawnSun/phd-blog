# Decap CMS 前台编辑 · OAuth 网关部署指南

目标：博客线上后台 `https://edawnsun.github.io/phd-blog/admin/`，浏览器直接写日志/笔记、传图，保存即 commit 到 main 并自动部署。

本目录的 `worker.js` 是 OAuth 网关（Decap 登录时 GitHub 不允许纯前端换 token，必须有个小代理）。一次性部署，之后零维护。

## 你需要做的（约 10 分钟，全程网页操作）

### 1. 部署 Cloudflare Worker（网关本体）

1. 打开 https://dash.cloudflare.com 注册/登录（免费，不要信用卡）
2. 左侧 Workers & Pages → Create → Create Worker → 名字随意（如 `phd-blog-auth`）→ Deploy
3. 进入该 Worker → Edit code → 把本目录 `worker.js` 的全部内容粘贴进去替换 → 右上角 Deploy
4. 记下 Worker 域名，形如 `https://phd-blog-auth.<子域>.workers.dev`

### 2. 创建 GitHub OAuth App

1. 打开 https://github.com/settings/developers → OAuth Apps → New OAuth App
2. 填写：
   - Application name: `phd-blog-decap`
   - Homepage URL: `https://edawnsun.github.io/phd-blog/admin/`
   - Authorization callback URL: `https://<第1步的Worker域名>/callback`（注意 /callback 后缀，无尾斜杠）
3. Register 后点 Generate a new client secret，得到 Client ID 和 Client Secret

### 3. 把密钥填进 Worker

回到 Cloudflare Worker → Settings → Variables and Secrets，添加两条（类型都选 Secret）：
- `GITHUB_CLIENT_ID` = 第 2 步的 Client ID
- `GITHUB_CLIENT_SECRET` = 第 2 步的 Client Secret

保存后重新 Deploy 一次（右上角）。

### 4. 把 Worker 域名告诉我

我把它填进 `static/admin/config.yml` 的 `base_url`，提交推送，完成。

之后打开 `https://edawnsun.github.io/phd-blog/admin/` → Login with GitHub → 授权 → 即可在线写作。新建文章默认草稿（draft: true），取消勾选保存即上线。

## 已完成的本地部分（无需你操作）

- `static/admin/index.html` + `config.yml`：后台页面与内容模型（工作日志/研究笔记两个集合，字段对齐现有 front matter）
- `static/admin/decap-cms.js`：Decap 本体自托管（5.1 MB），不依赖任何 CDN
- `scripts/oauth-worker/worker.js`：网关源码（本文件同目录）
