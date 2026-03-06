// todo.json을 json 형태로 가져와서 변수에 객체 형태로 보관 ( 구조 분해 할당 )
const { todos } = await fetch('./todos.json').then( res => res.json() );

// 필터링 객체
const services = {
    "전체": () => todos, // 전체 투두 반환
    "진행중": () => todos.filter(todo => !todo.completed), // 완료되지 않은 투두만 반환
    "완료": () => todos.filter(todo => todo.completed), // 완료된 투두만 반환
    "높은 우선순위": () => todos.filter(todo => todo.priority === 'high'), // 높은 우선순위의 투두만 반환
};
// 실제 텍스트, 디자인 클래스로 연결하는 객체
const priority = {
    'high': {'class': 'priority-high', 'text': '높음'},
    'medium': {'class': 'priority-medium', 'text': '보통'},
    'low': {'class': 'priority-low', 'text': '낮음'},
}

// 상태 변수: 현재 선택된 필터가 무엇인지 저장
let state = { activeFilter: '전체' };

// DOM 선택
const $todoList = $('#todoList');
const $filterButtons = $$('.filter-btn');


$('#totalCount').textContent = todos.length; // todos의 길이
$('#completedCount').textContent = services['완료']().length; // 완료된 투두의 길이
$('#pendingCount').textContent = services['진행중']().length; // 진행 중인 투두의 길이


$filterButtons.forEach( $btn => $btn.addEventListener('click', () => {
  // 필터 버튼을 클릭하면 해당 필터 버튼의 textContent를 현재 상태의 필터로 지정함
    state.activeFilter = $btn.textContent;
    render(); // 랜더링
}));

function render(){
    $filterButtons.forEach( $btn =>  $btn.classList.toggle('active', $btn.textContent === state.activeFilter))
    // 현재 상태의 필터와 이름이 같은 버튼에 active 필터를 토글시킴
    $todoList.innerHTML = ''; // 투두 리스트를 비움
    const $todoItems = services[state.activeFilter]().map( todo => 
      // 현재 접근한 필터의 투두에 map을 돌려서 각 todo에 접근
        newEl('div', { // div 요소 만든후
            className:`todo-item ${todo.completed ? 'completed' : ''}`, // 해당 투두가 완료 상태라면 completed 클래스 추가, 아니면 빈 값
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
            // HTML 에서 투두 div 긁어와서 innerHTML로 넣기
        })
    );
    $todoList.append(...$todoItems);
    // 투두 리스트에 방금 만든 div들을 스프레드 형태로 펼친 후 집어 넣음
}

render() // 첫 로딩 시 렌더링