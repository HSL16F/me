/* content.js — all editable site copy
   Edit text here; HTML structure lives in the .html files.
   --------------------------------------------------------- */
'use strict';
window.SITE = {

  // ── Home ────────────────────────────────────────────────
  home: {
    hero: {
      heading:    "Hi, I'm HSLFF16",
      headingDim: 'Test heading below',
      lead:       "I'm a software engineer in a bank and I love to do random projects and research",
      meta: [
        'Making things related to economics, sociology, international relations and general societal good',
        'open to research collabs',
        'Anywhere with good food',
      ],
    },

    projects: [
      // { name: 'quiethours',  stars: '★ 412',  desc: 'A tiny CLI that mutes notifications on a schedule you actually keep.',     lang: 'Rust',       href: '#' },
      // { name: 'mdembed',     stars: '★ 1.2k', desc: 'Drop live Markdown previews into any plain text field on the web.',        lang: 'TypeScript', href: '#' },
      // { name: 'latency-lab', stars: '★ 88',   desc: 'A toy network simulator for teaching queueing theory by playing with it.', lang: 'Python',     href: '#' },
      // { name: 'dotfiles',    stars: '★ 230',  desc: 'My terminal, editor, and window-manager setup — borrow freely.',          lang: 'Shell',      href: '#' },
    ],

    posts: [
      // { num: '01', title: 'On reading papers backwards',                      date: '2026-05', slug: 'reading-papers-backwards' },
      // { num: '02', title: 'A small case for boring infrastructure',           date: '2026-04', slug: 'boring-infrastructure' },
      // { num: '03', title: 'Notes from rewriting my site for the third time',  date: '2026-02', slug: 'rewriting-my-site' },
      // { num: '04', title: 'Queues are everywhere once you start looking',     date: '2025-12', slug: 'queues-everywhere' },
    ],

    research: {
      // lede: 'Questions at the edges of distributed systems and programming languages — how systems behave under load, and how we describe them without lying to ourselves.',
      // tags: ['distributed systems', 'queueing theory', 'programming languages', 'human-computer interaction'],
    },
  },

  // ── Blog ────────────────────────────────────────────────
  // blog: {
  //   intro: "Occasional notes on systems, software, and whatever I'm chewing on. No schedule, no newsletter — just an <a href=\"#\">RSS feed</a> if you want them.",

  //   groups: [
  //     {
  //       year: '2026',
  //       entries: [
  //         { title: 'On reading papers backwards',                      date: 'May 18', desc: 'A trick for getting through dense systems papers without drowning in section two.',    slug: 'reading-papers-backwards' },
  //         { title: 'A small case for boring infrastructure',           date: 'Apr 02', desc: 'Why I reach for the dull, well-understood tool more often than I used to.',            slug: 'boring-infrastructure' },
  //         { title: 'Notes from rewriting my site for the third time',  date: 'Feb 11', desc: 'What I kept, what I threw away, and why the whole thing is shorter now.',              slug: 'rewriting-my-site' },
  //       ],
  //     },
  //     {
  //       year: '2025',
  //       entries: [
  //         { title: 'Queues are everywhere once you start looking',     date: 'Dec 09', desc: 'Coffee shops, CPUs, and hospital triage are the same problem wearing different hats.',  slug: 'queues-everywhere' },
  //         { title: 'The smallest useful profiler',                     date: 'Sep 22', desc: 'Sixty lines of code that taught me more than a week with a real one.',                  slug: 'smallest-profiler' },
  //         { title: 'On keeping a research notebook',                   date: 'Jun 30', desc: 'Plain text, dated entries, and the quiet discipline of writing down dead ends.',        slug: 'research-notebook' },
  //       ],
  //     },
  //     {
  //       year: '2024',
  //       entries: [
  //         { title: 'What I learned maintaining a 200-star repo',       date: 'Nov 15', desc: 'Issues, burnout, and the strange economics of giving software away.',                   slug: 'maintaining-a-repo' },
  //         { title: 'Reading the manual, finally',                      date: 'Aug 03', desc: 'An ode to man pages and the slowly-vanishing art of RTFM.',                            slug: 'reading-the-manual' },
  //       ],
  //     },
  //   ],
  // },

  // ── Projects ────────────────────────────────────────────
//   projects: {
//     intro: 'Things I build to scratch an itch and leave on the internet for whoever else has the same itch. Most are small on purpose.',

//     maintained: [
//       { name: 'mdembed',      stars: '★ 1.2k', desc: 'Drop live Markdown previews into any plain text field on the web.',         lang: 'TypeScript', updated: 'Apr 2026', href: '#' },
//       { name: 'featherquery', stars: '★ 640',  desc: 'A 4 KB query builder for SQLite with zero dependencies.',                   lang: 'TypeScript', updated: 'Mar 2026', href: '#' },
//       { name: 'quiethours',   stars: '★ 412',  desc: 'A tiny CLI that mutes notifications on a schedule you actually keep.',      lang: 'Rust',       updated: 'May 2026', href: '#' },
//       { name: 'inkmark',      stars: '★ 305',  desc: "Markdown to PDF with typography defaults that don't embarrass you.",        lang: 'Go',         updated: 'Jan 2026', href: '#' },
//       { name: 'dotfiles',     stars: '★ 230',  desc: 'My terminal, editor, and window-manager setup — borrow freely.',           lang: 'Shell',      updated: 'Jan 2026', href: '#' },
//     ],

//     experiments: [
//       { name: 'tinyraft',    stars: '★ 118', desc: 'Raft consensus in under 500 lines, written purely for learning.',             lang: 'Rust',       updated: 'Aug 2025', href: '#' },
//       { name: 'latency-lab', stars: '★ 88',  desc: 'A toy network simulator for teaching queueing theory by playing with it.',   lang: 'Python',     updated: 'Feb 2026', href: '#' },
//       { name: 'coldbrew',    stars: '★ 73',  desc: 'A static site generator I no longer use, but you might.',                   lang: 'Python',     updated: '2024',     href: '#' },
//       { name: 'glyphwave',   stars: '★ 47',  desc: 'Generative type specimens that animate in the browser.',                    lang: 'JavaScript', updated: 'Nov 2025', href: '#' },
//     ],
//   },

//   // ── Research ────────────────────────────────────────────
//   research: {
//     lede: [
//       "I'm interested in how distributed systems behave under load, and in the languages and notations we use to describe them. A lot of my work sits at the seam between systems and programming languages — making fast things easier to reason about, and correct things easier to keep fast.",
//       'Currently doing this independently and looking for collaborators. If any of the below overlaps with what you\'re working on, <a href="#">say hello</a>.',
//     ],

//     interests: ['distributed systems', 'queueing theory', 'programming languages', 'type systems', 'human-computer interaction', 'performance measurement'],

//     publications: [
//       {
//         title:   'Bounded-Staleness Scheduling for Edge Caches',
//         authors: 'HSLF16, A. Researcher, B. Coauthor',
//         venue:   'HotOS Workshop · 2025',
//         links:   [{ label: '[pdf]', href: '#' }, { label: '[bib]', href: '#' }],
//       },
//       {
//         title:   'A Type System for Units of Measure in Spreadsheets',
//         authors: 'HSLF16, C. Collaborator',
//         venue:   'preprint · 2024',
//         links:   [{ label: '[arXiv]', href: '#' }],
//       },
//       {
//         title:   'Measuring Tail Latency Without Lying to Yourself',
//         authors: 'HSLF16',
//         venue:   'SysConf, poster · 2024',
//         links:   [{ label: '[pdf]', href: '#' }],
//       },
//     ],

//     talks: [
//       { title: 'Boring infrastructure, on purpose',        where: 'LocalDevConf · 2026' },
//       { title: 'Queueing theory for people who hate math', where: 'Systems Meetup · 2025' },
//     ],
//   },

};
