$$(".dragItem li").forEach(item => {
  item.setAttribute('draggable', true)
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", "")
    e.currentTarget.classList.add("dragging")
  })
});

dragZone.addEventListener("dragover", (e) => {e.preventDefault()})

dragZone.addEventListener("drop", (e) => {
  const draggingItem = $(".dragging")
  if(draggingItem) dragZone.append(draggingItem)
  $("p").style.display = 'none'
})