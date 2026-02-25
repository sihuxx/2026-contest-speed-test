const items = $$(".item")
const dragZone = $(".dragZone")
items.forEach(item => {
  item.draggable = true
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", "")
    e.currentTarget.classList.add("dragging")
  })
})
dragZone.addEventListener("dragover", (e) => e.preventDefault())
dragZone.addEventListener("drop", (e) => {
  const draggingItem = document.querySelector(".dragging")
  if (draggingItem) dragZone.append(draggingItem)
  $("p").style.display = 'none'
})
$(".init").addEventListener('click', (e) => {
  $(".items").append(...$$("li"))
  $("p").style.display = 'block'
})