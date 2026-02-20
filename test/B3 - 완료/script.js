let x = 0, y = 0;
const box = $(".box");
const moves = {
  ArrowUp: [0, -10], ArrowDown: [0, 10],
  ArrowLeft: [-10, 0], ArrowRight: [10, 0]
}
window.addEventListener('keydown', (e) => {
  if(!moves[e.key]) return;
  const [dx, dy] = moves[e.key]
  const limitX = (window.innerWidth - box.offsetWidth) / 2
  const limitY = (window.innerHeight - box.offsetHeight) / 2
  x = Math.max(-limitX, Math.min(limitX, x + dx));
  y = Math.max(-limitY, Math.min(limitY, y + dy));
  box.style.transform = `translate(${x}px, ${y}px)`
})

/* 
- offsetWidth: 테두리(Border)까지 포함한 눈에 보이는 진짜 박스 크기. (⭐가장 많이 씀)
- clientWidth: 테두리 빼고 패딩까지만 포함한 안쪽 공간 크기.
- scrollWidth: 스크롤 내려야 보이는 내용까지 합친 전체 내용물 크기.

- clientX: 스크롤 무시하고 현재 보이는 화면 기준. (ex. 팝업창)
- pageX: 스크롤 포함해서 문서 맨 꼭대기 기준. (ex. 페이지 어딘가에 점 찍기)
- offsetX: 클릭한 박스의 왼쪽 모서리 기준. (ex. 그림판 그리기)

- innerWidth: 탭/메뉴바 뺀 순수 웹사이트 화면 크기.
- screen.width: 그냥 모니터 해상도 크가
*/