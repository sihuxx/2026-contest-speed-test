const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let state = { limit:10, page:1 }
const datas = await fetch('./sample-data.csv').then(res => res.text());
const rows = datas.split('\n').slice(1).map( line => `<tr>${line.split(',').map( cell => `<td>${cell}</td>` ).join('')}</tr>` );

const $tableBody = $('#tableBody');
const $paginationButtons = $$('.pagination-btn');
const $prevBtn = $('.prev-btn');
const $nextBtn = $('.next-btn');

function setState(newState){
    state = { ...state, ...newState };
    render();
}

$paginationButtons.forEach( $btn => $btn.addEventListener('click', () => {
    setState({ page: Number($btn.textContent) });
}));

$prevBtn.addEventListener('click', () => {
    setState({ page: state.page - 1 });
});

$nextBtn.addEventListener('click', () => {
    setState({ page: state.page + 1 });
});


function render(){
    const range = state.limit * (state.page - 1);
    $tableBody.innerHTML = rows.slice(range, range + state.limit).join('');

    $prevBtn.disabled = state.page === 1;
    $nextBtn.disabled = state.page === 5;

    $paginationButtons.forEach( ($btn,index) => {
        $btn.classList.remove('active');
        $btn.classList.remove('page-info');

        $btn.textContent = index + 1;
        if(state.page === index+1) $btn.classList.add('active');
        if(state.page ===  1 && index === 1 || state.page === 5 && index === 3){
            $btn.classList.add('page-info');
            $btn.textContent = '...'
        }
    })
}

render()