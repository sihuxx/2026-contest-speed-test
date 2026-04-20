let state = { limit: 10, page: 1 }
const datas = await fetch('./sample-data.csv').then(res => res.text());
const rows = datas.split('\n').slice(1).map(line => `<tr>${line.split(',').map(cell => `<td>${cell}</td>`).join('')}</tr>`);

const $tableBody = $('#tableBody');
const paginationButtons = $$('.pagination-btn');
const prevBtn = $('.prev-btn');
const nextBtn = $('.next-btn');

function setState(newState) { state = { ...state, ...newState }; render(); }

paginationButtons.forEach(btn => btn.onclick = () => setState({ page: Number(btn.textContent) }))
prevBtn.onclick = () => { setState({ page: state.page - 1 }) }
nextBtn.onclick = () => { setState({ page: state.page + 1 }) }

function render() {
    const range = state.limit * (state.page - 1);
    $tableBody.innerHTML = rows.slice(range, range + state.limit).join('');

    prevBtn.disabled = state.page === 1;
    nextBtn.disabled = state.page === 5;

    paginationButtons.forEach((btn, i) => {
        const isDot = (state.page === 1 && i === 3) || (state.page === 5 && i === 1)
        btn.textContent = isDot ? '...' : i + 1;
        btn.className = `pagination-btn ${state.page === i + 1 ? 'active' : ''} ${isDot ? 'page-info' : ''}`.trim();
    });
}

render()