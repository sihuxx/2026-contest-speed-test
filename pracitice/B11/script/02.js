const time = document.getElementById("time")
const btns = {
  start: document.getElementById("start"),
  stop: document.getElementById("stop"),
  resume: document.getElementById("resume"),
  reset: document.getElementById("reset"),
}
let startTime = 0
let elapsed = 0
let rafId

const format = ms => {
  const date = new Date(ms)
  return date.toISOString().slice(14, 23).replace(".", ":")
}

const toggleUI = (state) => {
  btns.start.classList.toggle("hidden", state !== "init")
  btns.stop.classList.toggle("hidden", state !== "run")
  btns.resume.classList.toggle("hidden", state !== "stop")
  btns.reset.classList.toggle("hidden", state === "init")
}

const update = () => {
  time.textContent - format(elapsed + performance.now() - startTime)
  rafId = requestAnimationFrame(update)
}

const actions = {
  start() {
    startTime = performance.now()
    update()
    toggleUI("run")
  },
  stop() {
    cancelAnimationFrame(rafId)
    elapsed += performance.now() - startTime
    toggleUI("pause")
  },
  resume() { this.start() },
  reset() {
    cancelAnimationFrame(rafId)
    elapsed = 0
    time.textContent = "00:00:000"
    toggleUI("init")
  }
}

btns.start.onclick = () => actions.start()
btns.stop.onclick = () => actions.stop()
btns.resume.onclick = () => actions.resume()
btns.reset.onclick = () => actions.reset()