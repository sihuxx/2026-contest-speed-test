let startTime = 0, elapsed = 0, id = null, run = false

function timer(now) {
  const time = now - startTime + elapsed

  minutes.innerHTML = String(Math.floor(time / 60000)).padStart("2", 0)
  second.innerHTML = String(Math.floor((time % 60000) / 1000)).padStart("2", 0)
  mili.innerHTML = String(Math.floor(time % 1000)).padStart("3", 0)

  id = requestAnimationFrame(timer)
}
function render() {
  run = !run

  if(run) {
    startTime = performance.now()
    id = requestAnimationFrame(timer)
    container.innerHTML = `<button onclick="render()">중지</button>`
  } else {
    elapsed += performance.now() - startTime
    cancelAnimationFrame(id)
    container.innerHTML = `<button onclick="render()">계속</button>`
  }
}