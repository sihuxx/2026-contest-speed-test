const video = $("video")
$(".play").onclick = () => video.play()
$(".stop").onclick = () => video.pause()
$(".tenPlus").onclick = () => video.currentTime += 10
$(".tenMin").onclick = () => video.currentTime -= 10
$(".sound").onclick = () => video.muted = !video.muted