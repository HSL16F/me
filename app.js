/* ===========================================================
   HSLF16 — site behaviour
   1. theme toggle (forest <-> slate), persisted in localStorage
   2. content rendering from content.js into HTML skeletons
   3. markdown post loader for post.html (?post=slug)
   =========================================================== */
(function () {
  'use strict';
  var KEY = 'hslf-theme';

  /* ---------- theme toggle ---------- */
  function wireTheme() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') || 'forest';
      var next = cur === 'forest' ? 'slate' : 'forest';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  /* ---------- content rendering ---------- */
  function renderContent() {
    if (!window.SITE) return;
    var page = document.body && document.body.getAttribute('data-page');
    if (!page) return;

    document.querySelectorAll('[data-bind]').forEach(function (el) {
      var keys = el.getAttribute('data-bind').split('.');
      var val = window.SITE;
      for (var i = 0; i < keys.length; i++) val = val && val[keys[i]];
      if (val != null && typeof val === 'string') el.innerHTML = val;
    });

    if (page === 'home')     renderHome();
    if (page === 'blog')     renderBlog();
    if (page === 'projects') renderProjects();
    if (page === 'research') renderResearch();
  }

  function renderHome() {
    var d = window.SITE.home;

    var h1 = document.querySelector('.hero h1');
    if (h1) h1.innerHTML = d.hero.heading + '<span class="dim"> ' + d.hero.headingDim + '</span>';

    var strip = document.getElementById('hero-meta');
    if (strip) strip.innerHTML = d.hero.meta.map(function (item, i) {
      var dot = i === 0 ? '<span class="dot"></span>' : '';
      var sep = i > 0 ? '<span class="sep">/</span>' : '';
      return sep + '<span>' + dot + item + '</span>';
    }).join('');

    var grid = document.getElementById('home-projects');
    if (grid) grid.innerHTML = d.projects.map(function (p) {
      return '<a class="proj" href="' + p.href + '">'
        + '<div class="top"><span class="name">' + p.name + '</span><span class="stars">' + p.stars + '</span></div>'
        + '<p>' + p.desc + '</p>'
        + '<span class="lang">' + p.lang + '</span>'
        + '</a>';
    }).join('');

    var writing = document.getElementById('home-posts');
    if (writing) writing.innerHTML = d.posts.map(function (post) {
      return '<a href="post.html?post=' + post.slug + '">'
        + '<span class="num">' + post.num + '</span>'
        + '<span class="title">' + post.title + '</span>'
        + '<span class="date">' + post.date + '</span>'
        + '</a>';
    }).join('');

    var tags = document.getElementById('home-research-tags');
    if (tags) tags.innerHTML = d.research.tags.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join('');
  }

  function renderBlog() {
    var d = window.SITE.blog;
    var list = document.getElementById('blog-list');
    if (!list) return;
    list.innerHTML = d.groups.map(function (group) {
      return '<div class="blog-group">'
        + '<p class="year">' + group.year + '</p>'
        + group.entries.map(function (e) {
            return '<a class="entry" href="post.html?post=' + e.slug + '">'
              + '<div class="top"><span class="title">' + e.title + '</span><span class="date">' + e.date + '</span></div>'
              + '<p>' + e.desc + '</p>'
              + '</a>';
          }).join('')
        + '</div>';
    }).join('');
  }

  function renderProjects() {
    var d = window.SITE.projects;
    function cardHTML(p) {
      return '<a class="card" href="' + p.href + '">'
        + '<div class="top"><span class="name">' + p.name + '</span><span class="meta">' + p.stars + '</span></div>'
        + '<p>' + p.desc + '</p>'
        + '<div class="foot"><span class="dot"></span><span>' + p.lang + '</span><span>·</span><span>updated ' + p.updated + '</span></div>'
        + '</a>';
    }
    var maintained = document.getElementById('projects-maintained');
    if (maintained) maintained.innerHTML = d.maintained.map(cardHTML).join('');
    var experiments = document.getElementById('projects-experiments');
    if (experiments) experiments.innerHTML = d.experiments.map(cardHTML).join('');
  }

  function renderResearch() {
    var d = window.SITE.research;

    var ledeEl = document.getElementById('research-lede');
    if (ledeEl) ledeEl.innerHTML = d.lede.map(function (p) {
      return '<p class="lede">' + p + '</p>';
    }).join('');

    var interests = document.getElementById('research-interests');
    if (interests) interests.innerHTML = d.interests.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join('');

    var pubs = document.getElementById('research-pubs');
    if (pubs) pubs.innerHTML = d.publications.map(function (pub) {
      return '<div class="pub">'
        + '<p class="t">' + pub.title + '</p>'
        + '<p class="a">' + pub.authors + '</p>'
        + '<div class="row"><span class="v">' + pub.venue + '</span>'
        + pub.links.map(function (l) { return '<a href="' + l.href + '">' + l.label + '</a>'; }).join('')
        + '</div></div>';
    }).join('');

    var talks = document.getElementById('research-talks');
    if (talks) talks.innerHTML = d.talks.map(function (t) {
      return '<div class="talk"><span class="t">' + t.title + '</span><span class="w">' + t.where + '</span></div>';
    }).join('');
  }

  /* ---------- markdown post loader ---------- */
  function parseFront(raw) {
    var m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
    var meta = {}, body = raw;
    if (m) {
      body = raw.slice(m[0].length);
      m[1].split('\n').forEach(function (line) {
        var i = line.indexOf(':');
        if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
      });
    }
    return { meta: meta, body: body };
  }

  function fmtDate(d) {
    if (!d) return '';
    var dt = new Date(d);
    if (isNaN(dt.getTime())) return d;
    return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function loadPost() {
    var prose = document.querySelector('.post-prose');
    if (!prose) return;

    var slug = new URLSearchParams(location.search).get('post')
      || prose.getAttribute('data-default')
      || 'reading-papers-backwards';

    var titleEl = document.querySelector('[data-post-title]');
    var dateEl  = document.querySelector('[data-post-date]');
    var readEl  = document.querySelector('[data-post-read]');

    fetch('posts/' + slug + '.md', { cache: 'no-cache' })
      .then(function (res) { if (!res.ok) throw new Error('404'); return res.text(); })
      .then(function (raw) {
        var parsed = parseFront(raw);
        prose.innerHTML = window.marked ? window.marked.parse(parsed.body) : parsed.body;
        var words = parsed.body.split(/\s+/).filter(Boolean).length;
        if (titleEl) titleEl.textContent = parsed.meta.title || slug;
        if (dateEl)  dateEl.textContent  = fmtDate(parsed.meta.date);
        if (readEl)  readEl.textContent  = '· ' + Math.max(1, Math.round(words / 220)) + ' min read';
        document.title = (parsed.meta.title || slug) + ' · HSLF16';
      })
      .catch(function () {
        if (titleEl) titleEl.textContent = 'Post not found';
        if (dateEl)  dateEl.textContent  = '';
        if (readEl)  readEl.textContent  = '';
        prose.innerHTML = '<p style="color:var(--muted)">This post hasn’t been published yet. '
          + 'Drop a Markdown file at <code>posts/' + slug + '.md</code> and it’ll appear here.</p>';
      });
  }

  function init() { wireTheme(); renderContent(); loadPost(); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
