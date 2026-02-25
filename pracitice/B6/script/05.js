const items = $$(".item")
const dragZone = $(".dragZone")

items.forEach(item => {
  item.draggable = true
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", '')
    e.classList.add("draggable")
  })
})
dragZone.addEventListener("dragover", (e) => e.preventDefault())
dragZone.addEventListener('drop', () => {
  const draggingItem = document.querySelector(".dragging")
  if(draggingItem) dragZone.append(draggingItem)
  $("p").style.display = 'none'
})
$(".init").addEventListener("click", () => {
  $(".items").append(...$$("li"))
  $("p").style.display = 'block'
})