const ctx = canvas.getContext('2d');

let painting = false;

canvas.addEventListener('mousedown',  () => { painting = true; ctx.beginPath(); });
canvas.addEventListener('mouseup',    () => painting = false);
canvas.addEventListener('mouseleave', () => painting = false);
canvas.addEventListener('mousemove',  ({ offsetX: x, offsetY: y }) => {
  painting ? (ctx.lineTo(x, y), ctx.stroke()) : ctx.moveTo(x, y);
});

document.getElementById('save').addEventListener('click', () =>
  Object.assign(document.createElement('a'), { href: canvas.toDataURL(), download: 'image.png' }).click()
);

document.getElementById('clear').addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);