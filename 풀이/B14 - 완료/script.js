const [canvas, legend, lbl, val] = ["#canvas", ".legend", "#labelInput", "#valueInput"].map($);
const ctx = canvas.getContext("2d");
let data = [];

$("button").onclick = () => {
  if (!lbl.value || val.value <= 0) return;
  data.push({ k: lbl.value, v: +val.value, c: `hsl(${Math.random() * 360}, 70%, 60%)` });
  [lbl.value, val.value] = ["", ""];
  render();
};

function render() {
  const total = data.reduce((s, e) => s + e.v, 0);
  let start = -Math.PI / 2;
  legend.innerHTML = "";
  ctx.clearRect(0, 0, 500, 500);

  data.forEach(({k, v, c}) => {
    const angle = (v / total) * Math.PI * 2;
    
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 150, start, start + angle);
    ctx.fillStyle = c;
    ctx.fill();

    legend.innerHTML += `
      <div class="legend-item">
        <div class="legend-color" style="background:${c}"></div>
        <span>${k} (${(v / total * 100).toFixed(1)}%)</span>
      </div>`;
    
    start += angle;
  });
}