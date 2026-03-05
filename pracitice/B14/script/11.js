<<<<<<< HEAD
const canvas = $("canvas")
const legend = $(".legend")
const lbl = $("#labelInput")
const val = $("#valueInput")
const ctx = canvas.getContext("2d")
let data = [] // 데이터 담을 배열
// 여기에 항목명, 값, 색깔 누적시켜서 렌더 할 때마다 각각 다시 불러옴

$("button").onclick = () => {
  if (!lbl.value || val.value <= 0) return // 만약 항목명이 비어있거나 값이 0 이하일 때 막음
  data.push({ l: lbl.value, v: +val.value, h: `hsl(${Math.random() * 360}, 60%, 70%)` }) // 데이터에 항목명, 값 (앞에 + 붙여서 숫자로 변환), 색깔 push
  [lbl.value, val.value] = ["", ""] // 각 인풋 구조분해할당으로 비움
  render() // 버튼 누를 때마다 render
}

function render() {
  // math.PI = 180도
  let total = data.reduce((s, e) => s + e.v, 0) // data에 들어있는 각 모든 값들을 더해서 총합을 구함
  let start = -Math.PI / 2 // 캔버스의 시작 지점(0도)은 3시 방향이기 때문에 -90도를 비틀어서 12시 방향으로 만듦
  legend.innerHTML = "" // 비율 영역 비움
  ctx.clearRect(0, 0, canvas.width, canvas.height) // 파이 그래프 영역 지움

  data.forEach(({ l, v, h }) => { // 
    const angle = (v / total) * Math.PI * 2 // (해당 값 / 전체 값) * 360도 => 분수가나올거아님...그러면 각 데이터 별 비율이 총합 값이 바뀔 때마다 바뀌는 거임..

    ctx.beginPath() // 그림 그리기 시작
    ctx.moveTo(250, 250) // 캔버스 중앙으로 이동
    ctx.arc(250, 250, 150, start, start + angle) // 원 호 그리기 (중심 x 값, 중심 y 값, 반지름, 시작 지점, 어디까지 그릴지 지정)
    ctx.fillStyle = h // 부채꼴 색 지정
    ctx.fill() // 칠함

    legend.innerHTML += ` 
     <div class="legend-item">
        <div class="legend-color" style="background-color: ${h}"></div>
        <span>${l} (${((v / total) * 100).toFixed(1)}%)</span>
      </div>
    ` // 비율 영억 해당 데이터 아이템 추가

    start += angle // 시작 지점을 이미 칠한 영역의 오른 편에서 시작해서 칠해야함으로 시작 지점에 각도를 더해서 쭉 이어지게함
    // 360도에서 총합 값을 더하고 각각 데이터만 쭉 이어붙이는 형식
  })
=======
const canvas = $("#canvas")
const legend = $(".legend")
const lbl = $("#labelInput")
const val = $("#valueInput")
const ctx =  canvas.getContext('2d')
let data = []

$("button").onclick = () => {
    if(!lbl.value || val.value <= 0) return
    data.push({l: lbl.value, v:+val.value, h:`hsl(${Math.random() * 360}, 60%, 70%)`})
    [lbl.value, val.value] = ["", ""]
    render()
}
function render() {
    const total = data.reduce((s, e) => s + e.v, 0)
    let start = -Math.PI / 2
    legend.innerHTML = ""
    ctx.clearRect(0, 0, 500, 500)

    data.forEach(({ l, v, h }) => {
        const angle = (v / total) * Math.PI * 2

        ctx.beginPath()
        ctx.moveTo(250, 250)
        ctx.arc(250, 250, 150, start, start + angle)
        ctx.fillStyle = h
        ctx.fill()

        legend.innerHTML += `
        <div class="legend-item">
                <div class="legend-color" style="background-color:${h}"></div>
                <span>${l} (${(v / total * 100).toFixed(1)}%)</span>
            </div>
        `

        start += angle
    })
>>>>>>> 2a527936217885ec38c812d0776a3a44710b8283
}
