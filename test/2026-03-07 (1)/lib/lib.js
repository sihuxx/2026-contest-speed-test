const $ = (e) => document.querySelector(e)
const $$ = (e) => [...document.querySelectorAll(e)]
const newEl = (e, n) => Object.assign(document.createElement(e), n)