const state = { turn: 0, cells: [[], []], done: false }

const hasWon = (cell) => 
  Object.values(
    cell.reduce((acc, n) => ({ ...acc, [n] : (acc[n] || 0) + 1 }), {})
  ).some(v => v >= 3)

const finish = (msg) => { state.done = true; setTimeout(() => alert(msg), 0) }
[...$("#gameBoard").children].forEach(cell => 
  cell.onclick = () => {
    const { turn, cells, done } = state;
    if(done || cell.classList.contains("o") || cell.classList.contains("x")) return

    const mark = turn ? 'o' : 'x'
    cell.classList.add(mark)
    cells[turn].push(...cell.dataset.type.split(","))

    if(hasWon(cells[turn])) finish(`${mark.toUpperCase()}가 승리하였습니다!`)
    else if (cells[0].length + cells[1].length === 24) finish ("무승부입니다")

    state.turn ^= 1
  }
)