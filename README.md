# HSLF16 — personal site

A small, static personal site + blog. Plain HTML, one stylesheet, a little
JavaScript. No build step, no framework. Designed to be hosted on GitHub Pages.

## Files

```
index.html      Home (intro, selected projects, recent writing, research)
blog.html       Post list, grouped by year
projects.html   Open-source projects
research.html   Interests, publications, talks
post.html       Reads a Markdown post:  post.html?post=<slug>
style.css       All styling (two themes: forest + slate)
app.js          Theme toggle + Markdown loader
posts/          Your blog posts, as Markdown files
.nojekyll       Tells GitHub Pages to serve files as-is
```

## Writing a blog post

1. Create `posts/my-post-slug.md` with front matter at the top:

   ```markdown
   ---
   title: My post title
   date: 2026-06-01
   ---

   Your **Markdown** goes here. Headings, lists, > quotes, `code`, and
   ```code blocks``` are all styled to match the site.
   ```

2. Add a line to the list in `blog.html` (and optionally the "writing"
   section in `index.html`), linking to it:

   ```html
   <a class="entry" href="post.html?post=my-post-slug">
     <div class="top"><span class="title">My post title</span><span class="date">Jun 01</span></div>
     <p>One-line summary.</p>
   </a>
   ```

That's it — `post.html` fetches the Markdown, reads the title/date, estimates
reading time, and renders it.

## Themes

Two palettes ship: **forest** (default) and **slate**. The small dot in the
nav toggles between them; the choice is remembered in the browser. Colours live
as CSS variables at the top of `style.css` — edit them there to retune.

## Make it yours

- Replace `HSLF16` with your name/handle (it appears in each page header,
  footer, and in `app.js` for the document title).
- Fill in the real URLs in each page footer (github / email / rss / scholar)
  and the project/publication links (currently `#`).
- Swap in your own projects, posts, and research.

## Deploy to GitHub Pages

1. Put these files in the root of your repo (or in a `/docs` folder).
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, pick your branch and the folder (root or `/docs`).
3. Wait a minute; your site is live at `https://<username>.github.io/<repo>/`
   (or `https://<username>.github.io/` if the repo is named
   `<username>.github.io`).

The Markdown parser (`marked`) loads from a CDN in `post.html`. If you'd rather
not depend on the CDN, download `marked.min.js` into this folder and change the
script tag in `post.html` to `<script src="marked.min.js"></script>`.
