const $ = id => document.getElementById(id);
const time = $("time");
let start, elapsed = 0, raf;

const btnList = { start: $("start"), stop: $("stop"), resume: $("resume"), reset: $("reset") };

const ui = (s) => {
  btnList.start.className = s === 'init' ? '' : 'hidden';
  btnList.stop.className = s === 'run' ? '' : 'hidden';
  btnList.resume.className = s === 'stop' ? '' : 'hidden';
  btnList.reset.className = s === 'init' ? 'hidden' : '';
};

const update = () => {
  const ms = elapsed + (performance.now() - start);
  time.textContent = new Date(ms).toISOString().slice(14, 23).replace(".", ":");
  raf = requestAnimationFrame(update);
};

const run = (isStart) => {
  if (isStart) {
    start = performance.now();
    update();
    ui('run');
  } else {
    cancelAnimationFrame(raf);
    elapsed += performance.now() - start;
    ui('stop');
  }
};
btnList.start.onclick = () => run(true);
btnList.resume.onclick = () => run(true);
btnList.stop.onclick = () => run(false);
btnList.reset.onclick = () => {
  cancelAnimationFrame(raf);
  elapsed = 0;
  time.textContent = "00:00:000";
  ui('init');
};