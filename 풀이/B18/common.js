const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const $fileInput = $('#fileInput');
const $placeholder = $('#placeholder');
const $canvas = $('#canvas');
const ctx = $canvas.getContext('2d');
const state = {
  $image:null,
  rotation: 0,
  flipH: false,
  flipV: false,
  grayscale: false
};

const controls = {
  "rotate-left":()=>{
    state.rotation -= 90;
  },
  "rotate-right":()=>{
    state.rotation += 90;
  },
  "flip-h":()=>{
    state.flipH = !state.flipH;
  },
  "flip-v":()=>{
    state.flipV = !state.flipV;
  },
  "filter-gray":()=>{
    state.grayscale = !state.grayscale;
  },
  "reset":()=>{
    state.rotation = 0;
    state.flipH = false;
    state.flipV = false;
    state.grayscale = false;
  },
  "download":()=>{
    const $a = document.createElement('a');
    $a.href = $canvas.toDataURL();
    $a.download = 'image.png';
    $a.click();
  },
}

function render() {
  if (!state.$image) return;

  const $image = state.$image;
  const r = Math.abs(state.rotation % 360)
  const isSwap = r === 90 || r === 270;
  const w = isSwap ? $image.height : $image.width;
  const h = isSwap ? $image.width : $image.height;

  $canvas.width = w;
  $canvas.height = h;
  $canvas.style.display = 'block';
  $placeholder.style.display = 'none';


  ctx.translate(w / 2, h / 2);
  ctx.rotate((r * Math.PI) / 180); // 회전
  ctx.scale(state.flipH ? -1 : 1, state.flipV ? -1 : 1); // 좌우, 상하 반전
  ctx.translate(-w/2, -h/2);

  ctx.filter = state.grayscale ? 'grayscale(100%)' : 'none';    
  ctx.drawImage($image, 0, 0);
}

$$('.toolbar button').forEach( $button => $button.addEventListener('click',function(){
    if(!state.$image) return;
    const type = $button.dataset.type;
    controls[type]();
    render();
}));

$fileInput.addEventListener('change',function(){
  const file = $fileInput.files && $fileInput.files[0];
  const $image = new Image();
  $image.src = URL.createObjectURL(file);
  $image.onload = () => {
    state.$image = $image;
    controls.reset();
    render();
  }
})
