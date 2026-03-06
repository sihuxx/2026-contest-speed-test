const file = $("#file")
const img = $("#img");
const btns = $("#btns")

file.onchange = e => img.src = URL.createObjectURL(e.target.files[0])
btns.onclick =  e => img.style.filter = e.target.dataset.filter