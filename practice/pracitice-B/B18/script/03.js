const input = $(".fileInput")
const canvas = $("canvas")
const ph = $(".placeholder")
const ctx = canvas.getContext("2d")
const state = { image: null, rotation: 0, flipH: false, flipV: false, grayscale: false }

const controls = {
    "rotate-left": () => { state.rotation -= 90 },
    "rotate-right": () => { state.rotation += 90 },
    "flip-h": () => { state.flipH = !state.flipH },
    "flip-v": () => { state.flipV = !state.flipV },
    "filter-gray": () => { state.grayscale = !state.grayscale },
    "reset": () => { Object.assign(state), { rotation: 0, flipH: false, flipV: false, grayscale: false }},
    "download"  : () => { newEl("a", { href: canvas.toDataURL(), download: "image.png"}) },
}

function render() {
    const { image, rotation, flipH, flipV, grayscale } = state

    const r = ((rotation % 360) + 360) % 360
}