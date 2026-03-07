let state = {limit:10, page:1}

const data = await fetch("./sample-data.csv").then(res => res.text())
const rows = data.split("\n").slice(1).map(line => `<tr>${line.split(",").map(ceil => `<td>${ceil}</td>`).join("")}</tr>`)

function setState(newState) {
  state = {...state, ...newState}
  render()
}

const tableBody = $("#tableBody")
const pageBtns = $$(".pagination-btn")
const prevBtn = $(".prev-btn")
const nextBtn = $(".next-btn")

pageBtns.forEach(btn => btn.addEventListener("click", () => {
  setState({page: Number(btn.textContent)})
}))
prevBtn.addEventListener("click", () => {
  setState({ page: state.page - 1 })
})
nextBtn.addEventListener("click", () => {
  setState({ page: state.page + 1 })
})

function render() {
  const range = state.limit * (state.page - 1)
  tableBody.innerHTML = rows.slice(range, range + state.limit).join("")

  prevBtn.disabled = state.page === 1
  nextBtn.disabled = state.page === 5

  pageBtns.forEach((btn, i) => {
    btn.classList.remove("active")
    btn.classList.remove("page-info")
    btn.textContent = i + 1

    if(i + 1 === state.page) btn.classList.add('active');
    if(i === 1 && state.page === 5 || i === 3 && state.page === 1) {
      btn.classList.add("page-info")
      btn.textContent = '...'
    }
  })
}

render()