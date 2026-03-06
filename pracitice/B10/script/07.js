const ctx = canvas.getContext("2d")
ctx.lineWidth = 2.5
let painting = false

function start() {
  painting = true
  ctx.beginPath()
}
function stop() {
  painting = false
}
function move(e) {
  const x = e.offsetX
  const y = e.offsetY
  if(!painting) {
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

clearBtn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
saveBtn.onclick = () => {
  const a = document.createElement("a")
  a.href = canvas.toDataURL("image/png")
  a.download = "image.png"
  a.click()
}

canvas.addEventListener("mousemove", move)
canvas.addEventListener("mouseup", stop)
canvas.addEventListener("mouseleave", stop)
canvas.addEventListener("mousedown", start)