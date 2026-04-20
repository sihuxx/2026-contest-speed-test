let run = false
play.onclick = () => {run = !run; run ? video.play() : video.pause()}
tenMin.onclick = () => video.currentTime += 10
tenPlus.onclick = () => video.currentTime -= 10
sound.onclick = () => video.muted = !video.muted
setInterval(() => {
    time.innerHTML = `${String(Math.floor(video.currentTime / 60)).padStart(2, 0)}:${String(Math.floor(video.currentTime % 60)).padStart(2, 0)}`
}, 10)