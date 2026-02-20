const $itemZone = $(".items")
const $items = $$(".dragItem li")
const $dragZone = $(".dragZone")

$items.forEach(item => {
  item.setAttribute('draggable', true)
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/html", "")
    e.currentTarget.classList.add("dragging")
  })
});

$dragZone.addEventListener("dragover", (e) => {e.preventDefault()})

$dragZone.addEventListener("drop", (e) => {
  e.preventDefault()
  const draggingItem = document.querySelector(".dragging")
  if(draggingItem) $dragZone.appendChild(draggingItem)
  $("p").style.display = 'none'
})

$(".init").addEventListener("click", () => {
  $(".dragItem").append(...$$("li"));
  $("p").style.display = 'block';
});

/* 
  * target과 currentTarget의 차이
    - e.target: 클릭된 가장 안쪽 요소 (이미지를 눌렀다면 <img>).
    - e.currentTarget: addEventListener가 붙은 요소 (자식을 눌러도 무조건 <li>).
*/

/* 
  * 드래그 앤 드롭
    - dragover: 요소가 구역 위에 떠 있을 때 (e.preventDefault()를 써야 드롭 허용됨).
    - dragenter: 요소가 구역 안으로 처음 진입했을 때 
    - dragleave: 요소가 구역 밖으로 나갔을 때 
    - drop: 마우스를 놓아 요소를 실제로 떨어뜨렸을 때

    - draggable="true": 이 속성이 HTML에 있어야 드래그가 시작됩니다.
    - e.preventDefault(): dragover에서 이걸 안 해주면 브라우저가 드롭을 거부합니다. (금지 표시 뜸)
*/