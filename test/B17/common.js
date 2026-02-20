const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const createElement = (element, attrs={}) => Object.assign(document.createElement(element), attrs);

let state = { files: [], draggedIndex: null };
const $uploadZone = $('#uploadZone');
const $fileInput = $('#fileInput');
const $fileList = $('#fileList');


$fileInput.addEventListener('change', (e) => {
    state.files = [...state.files, ...e.target.files];
    e.target.value = '';
    render();
});

$uploadZone.addEventListener('click', () => {
    $fileInput.click();
});

$uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    $uploadZone.classList.add('drag-over');
});

$uploadZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    $uploadZone.classList.remove('drag-over');
});

$uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    $uploadZone.classList.remove('drag-over');
    state.files = [...state.files, ...e.dataTransfer.files];
    render();
});

function render(){
    $fileList.innerHTML = "";
    
    const $lis = state.files.map((file, index) =>{
        const $li = createElement('li', {
            draggable: 'true',
            innerHTML: `
                <span class="file-name">${file.name}</span>
                <span class="file-size">(${(file.size/1024).toFixed(1)} KB)</span>
            `
        });
    
        $li.addEventListener('dragstart', (e) => {
            state.draggedIndex = index;
            $li.classList.add('dragging');
        });

        $li.addEventListener('dragend', (e) => {
            state.draggedIndex = null;
            $li.classList.remove('dragging');
        });

        $li.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (index === state.draggedIndex) return;
            $li.classList.add('drag-over');
        });

        $li.addEventListener('dragleave', (e) => {
            $li.classList.remove('drag-over');
        });


        $li.addEventListener('drop', (e) => {
            e.preventDefault();
            if (index === state.draggedIndex) return;
            const item = state.files[state.draggedIndex];
            state.files[state.draggedIndex] = state.files[index];
            state.files[index] = item;
            render();
        });
        return $li;
    });
    $fileList.append(...$lis);
}
render()

