const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const saveBtn = document.getElementById("save")
const clearBtn = document.getElementById("clear")
ctx.lineWidth = 2.5;
let painting = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
  ctx.beginPath();
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
saveBtn.addEventListener("click", () => {
  const a = document.createElement("a")
  a.href = canvas.toDataURL("image/png")
  a.download = "image.png"
  a.click()
})
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
canvas.addEventListener("mousemove", onMouseMove); // 마우스 움직일 때
canvas.addEventListener("mousedown", startPainting); // 마우스 누를 때
canvas.addEventListener("mouseup", stopPainting); // 마우스 뗄 때
canvas.addEventListener("mouseleave", stopPainting); // 캔버스 밖으로 나갔을 때
