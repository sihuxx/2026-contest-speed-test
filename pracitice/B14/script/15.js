const canvas = $("canvas")
const legend = $(".legend")
const lbl = $("#labelInput")
const val = $("#valueInput")
const ctx = canvas.getContext("2d")
let data = []

$("button").onclick = () => {
  if(!lbl.value || val.value < 0) return
  data.push({ l: lbl.value, v: +val.value, h: `hsl(${Math.random() * 360}, 60%, 70%)` })
  [lbl.value, val.value] = ["", ""]
  render()
}

function render() {
  let total = data.reduce((s, e) => s + e.v, 0)
  let start = -Math.PI
  legend.innerHTML = ""
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  data.forEach(({l, v, h}) => {
    const angle = (v / total) * Math.PI * 2

    ctx.beginPath()
    ctx.moveTo(250, 250)
    ctx.arc(250, 250, 150, start, start + angle)
    ctx.fillStyle = h
    ctx.fill()

    legend.innerHTML += `<div class="legend-item">
          <div class="legend-color" style="background-color: ${h}"></div>
          <span>${l} (${((v / total) * 100).toFixed(1)}%)</span>
      </div>`
      
      start += angle
  })
}
render()