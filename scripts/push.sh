#!/usr/bin/env bash
# 推送 phd-blog 到 GitHub。
# 本机 github.com 直连超时，走 ghfast.top 镜像 + gh token 认证。
set -e
export PATH="/c/Program Files/GitHub CLI:$PATH"
cd "$(dirname "$0")/.."
TOKEN=$(gh auth token)
if [ -z "$TOKEN" ]; then
  echo "ERROR: gh auth token 为空，请先 gh auth login" >&2
  exit 1
fi
git push "https://x-access-token:${TOKEN}@ghfast.top/https://github.com/EdawnSun/phd-blog.git" "${1:-main}"
