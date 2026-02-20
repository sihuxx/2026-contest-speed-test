const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
const lbl = document.getElementById('lbl');
const val = document.getElementById('val');
const leg = document.getElementById('leg');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');

let data = [];

const randColor = () => `hsl(${Math.random() * 360}, 70%, 60%)`;

function draw() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  leg.innerHTML = '';

  if (data.length === 0) return;

  const total = data.reduce((s, d) => s + d.v, 0);
  let start = -Math.PI / 2;
  const c = cvs.width / 2;

  data.forEach(d => {
    const angle = (d.v / total) * 2 * Math.PI;
    const percent = Math.round((d.v / total) * 100);

    ctx.beginPath();
    ctx.moveTo(c, c);
    ctx.arc(c, c, c - 20, start, start + angle);
    ctx.fillStyle = d.color;
    ctx.fill();
    start += angle;

    leg.innerHTML += `
      <div class="legend-item">
          <div class="legend-color" style="background:${d.color}"></div>
          <span>${d.l} (${percent}%)</span>
      </div>`;
  });
}

function add() {
  if (!lbl.value || !val.value || val.value <= 0) return alert("올바른 항목과 값을 입력하세요.");
  data.push({ l: lbl.value, v: +val.value, color: randColor() });
  lbl.value = val.value = '';
  lbl.focus();
  draw();
}

function clearAll() {
  data = [];
  draw();
}

addBtn.addEventListener('click', add);
clearBtn.addEventListener('click', clearAll);
val.addEventListener('keypress', e => { if (e.key === 'Enter') add(); });