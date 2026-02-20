let playerState ={ order:0, datas:[[],[]], end:false }; // order: 1: O, 0: X
const finish = (message) => { playerState.end = true; setTimeout(() => alert(message), 0) }

[...document.getElementById('gameBoard').children].forEach( ($cell) => $cell.addEventListener('click', () => {
    if ($cell.classList.contains('o') || $cell.classList.contains('x') || playerState.end) return;
    $cell.classList.add(playerState.order ? 'o' : 'x');
    playerState.datas[playerState.order].push(...$cell.dataset.type.split(','));
    if(Object.values(playerState.datas[playerState.order].reduce( (acc, n) => ({ ...acc, [n]: (acc[n] || 0) + 1 })  , {})).includes(3)) finish(`${playerState.order ? 'O' : 'X'}가 승리하였습니다!`)
    else if( playerState.datas[0].length + playerState.datas[1].length === 24 ) finish('무승부입니다.')
    playerState.order = playerState.order === 1 ? 0 : 1;
}));