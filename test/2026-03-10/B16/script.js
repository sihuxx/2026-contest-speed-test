const { todos } = await fetch("./todos.json").then(res => res.json())

const sevices = {
  "전체": () => todos,
  "완료": () => todos.filter(todo => todo.completed),
  "진행중": () => todos.filter(todo => !todo.completed),
  "높은 우선순위": () => todos.filter(todo => !todo.priority === "high"),
}
const priority = {
  "high": {"class": "priority-high", "text": "높음"}, 
  "medium": {"class": "priority-medium", "text": "보통"}, 
  "low": {"class": "priority-low", "text": "낮음"}, 
}
const todoList = $("#todoList")
const filterBtn = $$(".filter-btn")

$("#totalCount").textContent = sevices["전체"]().length
$("#completedCount").textContent = sevices["완료"]().length
$("#pendingCount").textContent = sevices["진행중"]().length

let state = {activeFilter: "전체"}

filterBtn.forEach(btn => btn.addEventListener("click",() => {
  state.activeFilter = btn.textContent
}))