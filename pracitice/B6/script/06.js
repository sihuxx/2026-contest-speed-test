const items = $$(".item")
const dragZone = $(".dragZone")

items.forEach(item => {
  item.draggable = true
  item.addEvnetListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", "")
    e.classList.add("dragging")
  })
})
dragZone.addEvnetListener("dragover", (e) => e.preventDefualt())
dragZone.addEvnetListener("drop", () => {
  const draggingItem = document.querySelector(".dragging")
  if(draggingItem) dragZone.append(draggingItem)
  $("p").style.display = "none"
})
$(".init").addEvnetListener("click", () => {
  $(".items").append(...$$("li"))
  $("p").style.display = 'flex'
})