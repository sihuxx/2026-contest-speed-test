const state = { files: [], draggedIndex: null }
const zone = $(".upload-zone")
const list = $(".file-list")
const input = $(".fileInput")

const addFiles = (file) => { state.files.push(...file); render() }

input.addEventListener("change", (e) => { addFiles(e.target.files); e.target.value = "" })
zone.addEventListener("click", (e) => input.click())
zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add('drag-over') })
zone.addEventListener("dragleave", (e) => zone.classList.remove('drag-over'))
zone.addEventListener("drop", (e) => { e.preventDefault(); zone.classList.remove('drag-over'); addFiles(e.dataTransfer.files) })

function render() {
  list.innerHTML = ""
  list.append(...state.files.map((file, i) => {
    const li = newEl("li", {
      draggable: true,
      innerHTML: `<span class="file-name">${file.name}</span><span class="file-size">${(file.size / 1024).toFixed(1)}KB</span>`
    })
    li.addEventListener("dragstart", () => { state.draggedIndex = i; li.classList.add("dragging") })
    li.addEventListener("dragend", () => { state.draggedIndex = null; li.classList.remove("dragging") })
    li.addEventListener("dragover", () => { e.preventDefault(); state.draggedIndex && li.classList.add('drag-over') })
    li.addEventListener("drop", (e) => {
      e.preventDefault()
      if(i === state.draggedIndex) return
      [state.files[i], state.files[state.draggedIndex]] = [state.files[state.draggedIndex], state.files[i]]
      render()
    })
    return li
  }))
}

render()