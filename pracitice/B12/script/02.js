file.onchange = (e) => img.src = URL.createObjectURL(e.target.files[0])
btns.onclick = (e) => e.target.dataset.filter && (img.style.filter = e.target.dataset.filter)