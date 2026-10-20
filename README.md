# My Tech Blog

一个轻量、零构建、GitHub 风格的个人技术博客。基于原生 HTML/CSS/JS + marked.js + highlight.js，可以直接部署到 **GitHub Pages**。

## 功能特性

- 🎨 **GitHub 风格**设计 — 原生深浅色主题切换，自动记忆偏好
- 📝 **Markdown 写作** — 文章用 Markdown 写，marked.js 负责渲染
- 💡 **代码语法高亮** — highlight.js 支持 190+ 种语言
- 🗂️ **卡片式文章列表** — 类似 GitHub Repo 卡片，支持标签和语言标注
- 📱 **响应式布局** — 桌面和移动端都好看
- 🚀 **零构建零依赖** — 不需要 npm install，改完直接 commit

## 目录结构

```
.
├── index.html          # 首页（文章列表）
├── article.html        # 文章详情页
├── css/
│   └── style.css       # 主题样式（GitHub 配色）
├── js/
│   ├── articles.js     # ⭐ 文章元数据（新增文章编辑这里）
│   └── main.js         # 主逻辑（列表渲染 + 主题 + hljs 切换）
├── articles/           # ⭐ 文章内容（纯 Markdown 文件）
│   ├── hello-world.md
│   ├── markdown-guide.md
│   ├── javascript-tricks.md
│   └── github-stars-2026.md
└── .nojekyll           # GitHub Pages 专用（跳过 Jekyll 处理）
```

## 如何添加新文章

### 第 1 步：写 Markdown 文件

在 `articles/` 目录下创建一个新文件，比如 `my-new-post.md`：

```markdown
# 我的新文章标题

这里是正文内容...

```javascript
console.log("Hello World");
```
```

### 第 2 步：注册到文章列表

打开 `js/articles.js`，在 `window.ARTICLES` 数组里添加一条：

```javascript
{
  id: 'my-new-post',          // 唯一 ID（建议和文件名一致）
  title: '我的新文章标题',
  file: 'articles/my-new-post.md',  // Markdown 文件路径
  date: '2026-10-25',         // 日期 YYYY-MM-DD
  description: '一句话描述，会显示在卡片上',
  tags: ['javascript', 'tips'],  // 标签
  language: 'JavaScript'       // 语言标签（可选，会自动着色）
}
```

保存即可，首页会自动按日期倒序显示。

## 本地预览

在项目根目录下运行任意一个 HTTP 服务器：

```bash
# Python 3
python -m http.server 8000

# 或者 Node.js
npx http-server -p 8000

# 然后浏览器打开
http://localhost:8000
```

> ⚠️ 不要直接双击 `index.html` 用 `file://` 打开 — 浏览器会阻止 `fetch()` 加载 Markdown 文件。

## 部署到 GitHub Pages

### 方式 A：用户/组织站点（最简单）

```bash
# 1. 创建一个仓库，名字必须是 <你的用户名>.github.io
#    比如用户名叫 zhangsan，仓库名就叫 zhangsan.github.io

# 2. 把博客代码推上去
git init
git add .
git commit -m "init: 我的博客"
git branch -M main
git remote add origin https://github.com/zhangsan/zhangsan.github.io.git
git push -u origin main

# 3. 等 1-2 分钟，访问 https://zhangsan.github.io 就上线了
```

### 方式 B：项目站点

```bash
# 1. 仓库名随便取，比如叫 "blog"
git remote add origin https://github.com/zhangsan/blog.git
git push -u origin main

# 2. 在 GitHub 仓库 Settings → Pages
#    Source 选择 "Deploy from a branch"
#    Branch 选 main / (root)
#    保存后等待，访问地址是 https://zhangsan.github.io/blog/
```

> 注意：项目站点的子路径部署时，如果要让文章列表正常加载 Markdown，需要把 `js/articles.js` 里的 `file` 路径调整一下（或者直接把整个博客放到站点根目录）。

## 自定义

### 换个名字

编辑 `index.html` 和 `article.html` 里的 `<title>` 和 Site Brand 区域。

### 改配色

所有颜色都在 `css/style.css` 的 `:root` 和 `[data-theme="dark"]` 里定义，修改变量即可。

### 接入评论

这是纯静态站点，但可以轻松接入：
- [Giscus](https://giscus.app/)（GitHub Discussions 驱动，推荐）
- [Utterances](https://utteranc.es/)（GitHub Issues 驱动）
- [Valine](https://valine.js.org/)（LeanCloud）

## License

MIT
