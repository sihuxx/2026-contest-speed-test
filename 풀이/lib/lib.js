const $ = (e) => document.querySelector(e);
const $$ = (e) => [...document.querySelectorAll(e)];
const newEl = (a, t) => Object.assign(document.createElement(a), t)