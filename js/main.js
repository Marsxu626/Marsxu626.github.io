/* ========== 博客主逻辑 ========== */

const HLJS_LIGHT = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github.min.css';
const HLJS_DARK  = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github-dark.min.css';

// 主题管理
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('blog-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    this.applyHljsTheme(theme);
    this.updateToggleIcon(theme);
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('blog-theme', next);
    this.applyHljsTheme(next);
    this.updateToggleIcon(next);
  },
  applyHljsTheme(theme) {
    const link = document.getElementById('hljs-theme');
    if (!link) return;
    link.href = theme === 'dark' ? HLJS_DARK : HLJS_LIGHT;
  },
  updateToggleIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'dark'
      ? `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0Zm0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13ZM16 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8ZM2.25 8a.75.75 0 0 1-.75.75H0a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 2.25 8Zm10.606-5.106a.75.75 0 0 1 0 1.06l-1.061 1.062a.75.75 0 1 1-1.06-1.061l1.06-1.06a.75.75 0 0 1 1.06 0Zm-8.485 8.485a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.06a.75.75 0 0 1 1.06 0Zm0-7.424a.75.75 0 0 1-1.06 0l-1.061-1.06a.75.75 0 1 1 1.06-1.061l1.06 1.06a.75.75 0 0 1 0 1.06Zm8.485 8.485a.75.75 0 0 1-1.06 0l-1.06-1.061a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Z"/></svg>`
      : `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M9.598 1.591a.75.75 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.045-7.046.75.75 0 0 1 .176-.786Z"/></svg>`;
  }
};

// 日期格式化
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// 语言 tag 的 class
function langClass(lang) {
  if (!lang) return '';
  const l = lang.toLowerCase();
  return `lang-${l}`;
}

// ========== 首页渲染 ==========
function renderArticleList() {
  const container = document.getElementById('article-list');
  if (!container || !window.ARTICLES) return;

  // 按日期倒序
  const sorted = [...window.ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 16 16" width="48" height="48" aria-hidden="true"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"/></svg>
        <h3>还没有文章</h3>
        <p>在 <code>js/articles.js</code> 中添加你的第一篇文章吧！</p>
      </div>`;
    return;
  }

  container.innerHTML = sorted.map(art => `
    <article class="article-card">
      <a href="article.html?id=${art.id}">
        <div class="card-header">
          <svg class="card-repo-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>
          <span class="card-title">${art.title}</span>
        </div>
        <div class="card-body">${art.description || ''}</div>
        <div class="card-footer">
          <span class="card-meta">
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0Zm-2 5.5v8.75a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25V5.5ZM2.75 3.5a.25.25 0 0 0-.25.25V4h11v-.25a.25.25 0 0 0-.25-.25Z"/></svg>
            ${formatDate(art.date)}
          </span>
          ${art.language ? `<span class="card-meta card-tag ${langClass(art.language)}">${art.language}</span>` : ''}
          ${art.tags && art.tags.length ? `<span class="card-tags">${art.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}</span>` : ''}
        </div>
      </a>
    </article>
  `).join('');

  // 更新 section count
  const count = document.getElementById('article-count');
  if (count) count.textContent = sorted.length;
}

// ========== 文章详情页渲染 ==========
async function renderArticleDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  if (!id) { window.location.href = 'index.html'; return; }

  const article = window.ARTICLES.find(a => a.id === id);
  if (!article) {
    document.getElementById('article-content').innerHTML = `
      <div class="empty-state">
        <h3>文章不存在</h3>
        <p><a href="index.html">返回首页</a></p>
      </div>`;
    return;
  }

  // 设置头部信息
  document.title = `${article.title} · My Blog`;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-date').textContent = formatDate(article.date);
  const langEl = document.getElementById('article-language');
  if (article.language) {
    langEl.textContent = article.language;
    langEl.className = `card-tag ${langClass(article.language)}`;
    langEl.style.fontSize = '11px';
  } else {
    langEl.remove();
  }

  const tagContainer = document.getElementById('article-tags');
  if (article.tags && article.tags.length) {
    tagContainer.innerHTML = article.tags.map(t => `<span class="card-tag">#${t}</span>`).join('');
  } else {
    tagContainer.remove();
  }

  // 加载 Markdown
  const contentEl = document.getElementById('article-content');
  contentEl.innerHTML = '<div class="loading">Loading article...</div>';

  try {
    const res = await fetch(article.file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();

    // marked v5+ 移除了 highlight 回调，直接 parse 后再手动 hljs
    const html = window.marked.parse(md);
    contentEl.innerHTML = `<div class="markdown-body">${html}</div>`;

    // 对所有 pre code 手动调用 highlightElement
    if (window.hljs) {
      contentEl.querySelectorAll('pre code').forEach(block => {
        // 去掉可能的 language-xxx 前缀（marked 已经加上了），hljs 会自动识别
        window.hljs.highlightElement(block);
      });
    }
  } catch (err) {
    contentEl.innerHTML = `
      <div class="empty-state">
        <h3>加载文章失败</h3>
        <p>无法读取 <code>${article.file}</code>：${err.message}</p>
        <p style="margin-top:16px"><a href="index.html">返回首页</a></p>
      </div>`;
  }
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', () => ThemeManager.toggle());

  // 判断当前页面类型
  if (document.getElementById('article-list')) {
    renderArticleList();
  } else if (document.getElementById('article-content')) {
    renderArticleDetail();
  }
});
