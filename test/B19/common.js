const $ = (query) => document.querySelector(query);

const $currentYear = $('.current-year');
const $calendarPrevYear = $('.btn-prev');
const $calendarNextYear = $('.btn-next');
const $calendarContent = $('.calendar-content');

const now = new Date();
let current = new Date();

const renderCalendar = () => {
    const [year, month] = [current.getFullYear(), current.getMonth()];
    const isActive = (day) => now.toDateString() === new Date(year, month, day).toDateString();

    $currentYear.textContent = `${year}년 ${month+1}월`;
    $calendarContent.innerHTML = `
        ${'일월화수목금토'.split('').map( (day) => `<div class="week">${day}</div>` ).join('')}
        ${'<div class="day"></div>'.repeat(new Date(year, month, 1).getDay())}
        ${ Array.from({ length: new Date(year, month + 1, 0).getDate() }).map( (_, i) => `<div class="day ${isActive(i+1) ? 'active' : ''}">${i+1}</div>` ).join('') }
    `;
};

$calendarPrevYear.addEventListener('click', () => {
    current.setMonth(current.getMonth() - 1);
    renderCalendar();
});

$calendarNextYear.addEventListener('click', () => {
    current.setMonth(current.getMonth() + 1);
    renderCalendar();
});

renderCalendar();