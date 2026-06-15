/* content.js — all editable site copy
   Edit text here; HTML structure lives in the .html files.
   --------------------------------------------------------- */
'use strict';
window.SITE = {

  // ── Home ────────────────────────────────────────────────
  home: {
    hero: {
      heading:    "Hi I'm HSLF16",
      headingDim: '& and this is my website. See below for research, blog posts and resume',
      lead:       "I'm an engineer at a bank and like to explore quantitiatve approaches to the social sciences on my own time.",
      meta: [
        'Making things related to economics, sociology, international relations and general societal good',
        'open to research collabs',
      ],
    },

    projects: [
      { name: 'your-project', stars: '★ 0', desc: 'A short description of what this project does and why it exists.', lang: 'TypeScript', href: '#' },
    ],

    posts: [
      { num: '01', title: 'On reading papers backwards', date: '2026-05', slug: 'reading-papers-backwards' },
    ],

    research: {
      lede: 'A short note on your research interests — what questions you chase and why.',
      tags: ['your interest', 'another area'],
    },
  },

  // ── Blog ────────────────────────────────────────────────
  blog: {
    intro: "Occasional notes on whatever I'm chewing on. No schedule, no newsletter.",

    groups: [
      {
        year: '2026',
        entries: [
          { title: 'On reading papers backwards', date: 'May 18', desc: 'A trick for getting through dense papers without drowning in section two.', slug: 'reading-papers-backwards' },
        ],
      },
    ],
  },

  // ── Projects ────────────────────────────────────────────
  projects: {
    intro: 'Things I build to scratch an itch and leave on the internet for whoever else has the same itch.',

    maintained: [
      { name: 'your-project', stars: '★ 0', desc: 'A short description of what this project does and why it exists.', lang: 'TypeScript', updated: 'Jun 2026', href: '#' },
    ],

    experiments: [],
  },

  // ── Research ────────────────────────────────────────────
  research: {
    lede: [
      "A short statement about your research interests — what questions you're chasing and why.",
      'Looking for collaborators. If any of the below overlaps with what you\'re working on, <a href="#">say hello</a>.',
    ],

    interests: ['your interest', 'another area', 'a third topic'],

    publications: [
      {
        title:   'Your Paper Title Here',
        authors: 'Your Name, Co-author Name',
        venue:   'Conference or Journal · 2026',
        links:   [{ label: '[pdf]', href: '#' }],
      },
    ],

    talks: [],
  },

};
