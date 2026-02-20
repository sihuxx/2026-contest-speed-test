const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const createElement = (element, attrs={}) => Object.assign(document.createElement(element), attrs);

const { todos } = await fetch('./todos.json').then( res => res.json() );
const services = {
    "전체": () => todos,
    "진행중": () => todos.filter(todo => !todo.completed),
    "완료": () => todos.filter(todo => todo.completed),
    "높은 우선순위": () => todos.filter(todo => todo.priority === 'high'),
};
const priority = {
    'high': {'class': 'priority-high', 'text': '높음'},
    'medium': {'class': 'priority-medium', 'text': '보통'},
    'low': {'class': 'priority-low', 'text': '낮음'},
}

let state = { activeFilter: '전체' };
const $todoList = $('#todoList');
const $filterButtons = $$('.filter-btn');

$('#totalCount').textContent = todos.length;
$('#completedCount').textContent = services['완료']().length;
$('#pendingCount').textContent = services['진행중']().length;

$filterButtons.forEach( $btn => $btn.addEventListener('click', () => {
    state.activeFilter = $btn.textContent;
    render();
}));

function render(){
    $filterButtons.forEach( $btn =>  $btn.classList.toggle('active', $btn.textContent === state.activeFilter))
    $todoList.innerHTML = '';
    const $todoItems = services[state.activeFilter]().map( todo => 
        createElement('div',{ 
            className:`todo-item ${todo.completed ? 'completed' : ''}`,
            innerHTML: `
                <div class="todo-header">
                    <h3 class="todo-title">${todo.title}</h3>
                    <div class="todo-badges">
                        <span class="badge ${priority[todo.priority].class}">${priority[todo.priority].text}</span>
                        <span class="badge status-badge">${todo.completed ? '완료' : '진행중'}</span>
                    </div>
                </div>
                <p class="todo-description">${todo.description}</p>
                <div class="todo-footer">
                    <div class="date-info">
                        <span>📅 마감: ${todo.dueDate}</span>
                        <span>📝 생성: ${todo.createdAt}</span>
                    </div>
                </div>
            `
        })
    );
    $todoList.append(...$todoItems);
}

render()