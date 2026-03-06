let x = 0, y = 0

const moves = {
  ArrowUp: [0, -10], ArrowDown: [0, 10],
  ArrowLeft: [-10, 0], ArrowRight: [10, 0]
}

window.addEventListener("keydown", (e) => {
  if(!moves[e.key]) return
  const [dx, dy] = moves[e.key]
  const limitX = (window.innerWidth - box.offsetWidth) / 2
  const limitY = (window.innerHeight - box.offsetHeight) / 2
  x = Math.max(-limitX, Math.min(limitX, x + dx))
  y = Math.max(-limitY, Math.min(limitY, y + dy))
  box.style.transform = `translate(${x}px, ${y}px)`
})