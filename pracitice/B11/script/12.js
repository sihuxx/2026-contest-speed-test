const btns = {
    start: $("#start"),
    stop: $("#stop"),
    resume: $("#resume"),
    reset: $("#reset"),
}

let startTime = 0, elapsed = 0, raf

const ui = (state) => {
    btns.start.classList.toggle("hidden", state !== "init")
    btns.stop.classList.toggle("hidden", state !== "run")
    btns.resume.classList.toggle("hidden", state !== "stop")
    btns.reset.classList.toggle("hidden", state === "init")
}

const update = () => {
    const ms = elapsed + (performance.now() - startTime)
    time.textContent = new Date(ms).toISOString().slice(14, 23).replace(".", ":")
    raf = requestAnimationFrame(update)
}

const run = (isRun) => {
    if(isRun) {
        startTime = performance.now()
        update()
        ui("run")
    } else {
        cancelAnimationFrame(raf)
        elapsed += performance.now() - startTime
        ui("stop")
    }
}

btns.start.onclick = () => run(true)
btns.stop.onclick = () => run(false)
btns.resume.onclick = () => run(true)
btns.reset.onclick = () => {
    cancelAnimationFrame(raf)
    time.textContent = "00:00:000"
    elapsed = 0
    ui("init")
}