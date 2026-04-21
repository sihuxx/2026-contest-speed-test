const input = $('#fileInput'), canvas = $('#canvas'), ph = $('#placeholder');
const ctx = canvas.getContext('2d');
const state = { image: null, rotation: 0, flipH: false, flipV: false, grayscale: false };

const controls = {
  'rotate-left':  () => state.rotation -= 90,
  'rotate-right': () => state.rotation += 90,
  'flip-h':       () => state.flipH = !state.flipH,
  'flip-v':       () => state.flipV = !state.flipV,
  'filter-gray':  () => state.grayscale = !state.grayscale,
  'reset':        () => Object.assign(state, { rotation: 0, flipH: false, flipV: false, grayscale: false }),
  'download':     () => Object.assign(document.createElement('a'), { href: canvas.toDataURL(), download: 'image.png' }).click(),
};

function render() {
  const { image, rotation, flipH, flipV, grayscale } = state;
  if (!image) return;

  const r = ((rotation % 360) + 360) % 360;
  const isSwap = r === 90 || r === 270;
  const [w, h] = isSwap ? [image.height, image.width] : [image.width, image.height];

  Object.assign(canvas, { width: w, height: h });
  canvas.style.display = 'block';
  ph.style.display = 'none';

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate((r * Math.PI) / 180);
  ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);
  ctx.filter = grayscale ? 'grayscale(100%)' : 'none';
  ctx.drawImage(image, 0, 0);
  ctx.restore();
}

document.querySelectorAll('.toolbar button').forEach($btn =>
  $btn.addEventListener('click', () => {
    if (!state.image) return;
    controls[$btn.dataset.type]?.();
    render();
  })
);

input.addEventListener('change', () => {
  const file = input.files[0];
  if (!file) return;
  const image = new Image();
  image.src = URL.createObjectURL(file);
  image.onload = () => { state.image = image; controls.reset(); render(); };
});