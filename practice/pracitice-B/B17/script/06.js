const state = { files: [], draggedIndex: null }
const zone = $(".upload-zone")
const input = $(".fileInput")
const list = $(".file-list")

const addFiles = (file) => { state.files.push(...file); render()}

input.addEventListener("change", (e) => {addFiles(e.target.files); e.target.value = ""})
zone.addEventListener("click", () => input.click())
zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add("drag-over") })
zone.addEventListener("dragleave", () => { zone.classList.remove("drag-over") })
zone.addEventListener("drop", (e) => { e.preventDefault(); zone.classList.remove("drag-over") })

function render() {
  list.innerHTML = ""
  list.append(...state.files.map((file, i) => {
    const li = newEl("li", {
      draggable: true,
      innerHTML: `<span class="file-name">${file.name}</span><span class="file-size">${(file.size / 1024).toFixed(1)} KB</span>`
    })
    li.addEventListener("dragstart", () => { li.classList.add("dragging"); state.draggedIndex = i })
    li.addEventListener("dragend", () => { li.classList.remove("dragging"); state.draggedIndex = null })
    li.addEventListener("dragover", (e) => { e.preventDefault(); li.classList.add("drag-over") })
    li.addEventListener("drop", (e) => {
      e.preventDefault()
      if(state.draggedIndex === i) return
      [state.files[i], state.files[state.draggedIndex]] = [state.files[state.draggedIndex], state.files[i]]
      render()
    })
    return li
  }))
}
render()