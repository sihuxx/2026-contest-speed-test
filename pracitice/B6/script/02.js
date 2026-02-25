const items = $$(".item")
const dragZone = $(".dragZone")
const init = $(".init")
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
  if (draggingItem) dragZone.appendChild(draggingItem)
  $("p").style.display = 'none'
})
init.addEventListener("click", () => {
  $(".items").append(...$$("li"))
  $("p").style.display = 'block'
})
// 드래그 스타트
// 데이터 저장하고 클래스 추가
// 드래그오버
// 프리벤트디펄트()
// 드롭
// 드래깅 클래스 잡고 있으면 드래그존에 자식으로 할당 후 텍스트 디스플레이 논
// 이닛
// 아이템존에 모든 li를 스프레드 형태로 자식으로 할당 텍스트 디스플레이 블록