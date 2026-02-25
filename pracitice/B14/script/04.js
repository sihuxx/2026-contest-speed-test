const canvas = $("canvas")
const legend = $(".legend")
const lbl = $("#labelInput")
const val = $("#valueInput")
const ctx = canvas.getContext("2d")
let data = []

$("button").onclick = () => {
  if(!lbl.value || val.value <= 0) return
  data.push({ v: val.value, l: lbl.value,  })
}