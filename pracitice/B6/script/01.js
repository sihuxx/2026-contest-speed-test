item.forEach(it => {
  it.draggable = true
  it.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", "")
    e.currentTarget.classList.add("dragging")
  })
});
drag.addEventListener("dragover", (e) => e.preventDefault())

drag.addEventListener("drop", (e) => {
  const draggingItem = document.querySelector(".dragging")
  if (draggingItem) drag.appendChild(draggingItem)
  $("p").style.display = 'none'
})

$(".init").addEventListener("click", () => {
  $(".items").append(...$$("li"))
  $("p").style.display = "block"
})