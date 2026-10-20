/* ========== 文章元数据配置 ==========
 * 添加新文章时，只需在这里追加一条记录，然后在 articles/ 目录下放好对应的 .md 文件
 * file 字段填写 Markdown 文件的相对路径
 */
window.ARTICLES = [
  {
    id: 'hello-world',
    title: 'Hello, World! — 博客诞生记',
    file: 'articles/hello-world.md',
    date: '2026-10-20',
    description: '这是本博客的第一篇文章，介绍博客的技术架构、GitHub Pages 部署方式，以及我对写技术博客的一些思考。',
    tags: ['markdown', 'github-pages', 'blog'],
    language: 'Markdown'
  },
  {
    id: 'markdown-guide',
    title: 'Markdown 语法速查表 — 技术写作者必备',
    file: 'articles/markdown-guide.md',
    date: '2026-10-21',
    description: '一份面向技术博客写作者的 Markdown 语法速查表，覆盖标题、代码块、表格、引用、任务列表、数学公式等常用元素。',
    tags: ['markdown', 'writing'],
    language: 'Markdown'
  },
  {
    id: 'javascript-tricks',
    title: '10 个让你的 JavaScript 更优雅的小技巧',
    file: 'articles/javascript-tricks.md',
    date: '2026-10-22',
    description: '从可选链到空值合并运算符，从解构到生成器，总结 10 个我日常高频使用的 JavaScript 特性，让代码更简洁、更易读。',
    tags: ['javascript', 'tips'],
    language: 'JavaScript'
  },
  {
    id: 'github-stars-2026',
    title: '2026 年 GitHub 上最火的 AI 项目盘点',
    file: 'articles/github-stars-2026.md',
    date: '2026-10-23',
    description: '从本周 Star 爆增的项目到经典 LLM 推理框架，盘点当前 GitHub AI 生态的热点项目和三大核心趋势。',
    tags: ['ai', 'github', 'trending'],
    language: 'Markdown'
  }
];
