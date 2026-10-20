# Hello, World! — 博客诞生记

> 这是本博客的第一篇文章。"不积跬步，无以至千里；不积小流，无以成江海。"

## 为什么又写博客？

说实话，在这个 AI 可以帮我写一切的时代，写博客似乎越来越不"划算"了。但我依然想写，原因有三：

1. **输出倒逼输入** — 要把一件事讲清楚，必须自己先真正搞懂
2. **留痕** — 一年后再看今天写的东西，会发现自己的变化
3. **公开的学习笔记** — 比存在本地的 Markdown 更有动力去维护

## 技术选型

这次我不想用 Hexo、Hugo 或者 Gatsby 之类的重量级框架了。原因很简单：

- 我只有一个人写文章
- 我不需要评论、RSS、搜索这些花里胡哨的东西
- **越轻量 = 越不会跑路**

所以最终方案是：

| 层 | 选择 | 理由 |
|---|---|---|
| 页面 | 原生 HTML + CSS + JS | 零构建，改了就生效 |
| Markdown 渲染 | [marked.js](https://marked.js.org/) | 轻量、GFM 支持好 |
| 代码高亮 | [highlight.js](https://highlightjs.org/) | GitHub 风格主题 |
| 部署 | **GitHub Pages** | 免费、和代码一起托管 |
| 文章数据 | 一个 JSON 数组 | 简单到极致 |

## 部署到 GitHub Pages

部署就三步：

```bash
# 1. 创建仓库，比如 username.github.io
git init
git add .
git commit -m "init: 我的博客"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main

# 2. 在仓库 Settings → Pages 中选择 main 分支 / (root)
# 3. 等待 1-2 分钟，访问 https://username.github.io 就能看到了
```

就这么简单，没有 CI/CD，没有 npm run build，没有环境变量。

## 关于写什么

目前的计划是：

- 🧩 日常遇到的 **编程小技巧**
- 🤖 正在探索的 **AI 工具和 Agent**
- 🔧 好用的 **开源工具推荐**
- 🧠 学到新技术时的 **第一手笔记**

不追求深度，不追求爆款，**先坚持写起来**。

---

> "写吧，就当是写给一年后的自己。" — 不知道谁说的，但我信了。
