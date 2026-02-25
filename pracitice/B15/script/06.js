let state = { page: 1, limit: 10 }

const datas = await fetch("./sample-data.csv").then(res => res.text())
const rows = datas.split("\n").slice(1).map(line => `<tr>${line.split(",").map(ceil => `<td>${ceil}</td>`).join("")}</tr>`)

const $tableBody = $("#tableBody")
const $pageBtn = $$(".pagination-btn")
const $prevBtn = $(".prev-btn")
const $nextBtn = $(".next-btn")

function setState(newState) {
  state = { ...state, ...newState }
  render()
}

$pageBtn.forEach(btn => btn.addEventListener("click", () => {
  setState({ page: Number(btn.textContent) })
}))
$prevBtn.addEventListener("click", () => {
  setState({ page: state.page - 1 })
})
$nextBtn.addEventListener("click", () => {
  setState({ page: state.page + 1 })
})

function render() {
  const range = state.limit * (state.page - 1)
  $tableBody.innerHTML = rows.slice(range, range + state.limit).join("")

  $prevBtn.disabled = state.page === 1
  $nextBtn.disabled = state.page === 5

  $pageBtn.forEach((btn, i) => {
    btn.classList.remove("active")
    btn.classList.remove("page-info")
    btn.textContent = i + 1
    
    if(i + 1 === state.page) btn.classList.add("active")
    if(i === 3 && state.page === 1 || i === 1 && state.page === 5) {
      btn.classList.add("page-info")
      btn.textContent = "..."
    }
  })
}

render()