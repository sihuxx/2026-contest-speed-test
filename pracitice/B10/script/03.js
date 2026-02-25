const ctx = canvas.getContext("2d")
let painting = false
ctx.lineWidth = 2.5

function stopPainting() {
  painting = false
}
function startPainting() {
  painting = true
  ctx.beginPath()
}
function moveMouse(e) {
  const x = e.offsetX
  const y = e.offsetY
  if (!painting) {
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

saveBtn.onclick = () => {
  const a = document.createElement("a")
  a.href = canvas.toDataURL("image/png")
  a.download = "image.png"
  a.click()
}
clearBtn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener("mousemove", moveMouse)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseleave", stopPainting)
canvas.addEventListener("mouseup", stopPainting)