const ctx = canvas.getContext("2d")
ctx.lineWidth = 2.5
let painting = false

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
  if(!painting) {
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}
saveBtn.addEventListener("click", () => {
  const a = document.createElement("a")
  a.href = canvas.toDataURL("image/png")
  a.download = "image.png"
  a.click()
})
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.width)
})
canvas.addEventListener("mousemove", moveMouse)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", stopPainting)
canvas.addEventListener("mouseleave", stopPainting)