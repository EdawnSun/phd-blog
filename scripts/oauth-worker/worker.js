// Decap CMS GitHub OAuth 网关（Cloudflare Worker）
// 端点：/auth 发起授权跳转；/callback 接收授权码换取 token 并回传给 Decap
// 需要在 Worker 环境变量（Settings → Variables and Secrets）中配置：
//   GITHUB_CLIENT_ID     GitHub OAuth App 的 Client ID
//   GITHUB_CLIENT_SECRET GitHub OAuth App 的 Client Secret（类型选 Secret）

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: "repo",
      });
      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params.toString()}`,
        302
      );
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return new Response("missing code", { status: 400 });
      }
      const resp = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "decap-oauth-worker",
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await resp.json();
      if (!data.access_token) {
        return new Response("oauth failed: " + JSON.stringify(data), {
          status: 502,
        });
      }
      const successPayload = JSON.stringify({
        token: data.access_token,
        provider: "github",
      });
      const html =
        "<!doctype html><html><body><script>" +
        "(function () {" +
        "  function receiveMessage(e) {" +
        "    window.opener.postMessage(" +
        "      'authorization:github:success:' + '" +
        successPayload.replace(/\\/g, "\\\\").replace(/'/g, "\\'") +
        "'," +
        "      e.origin" +
        "    );" +
        "  }" +
        '  window.addEventListener("message", receiveMessage, false);' +
        '  window.opener.postMessage("authorizing:github", "*");' +
        "})();" +
        "</script></body></html>";
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("decap oauth gateway ok", { status: 200 });
  },
};
