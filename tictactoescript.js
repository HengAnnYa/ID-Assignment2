window.addEventListener('DOMContentLoaded',()=>{
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerdisplay = document.querySelector('.display-player');
    const resetbutton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['','','','','','','','',''];
    let currentplayer ='X';
    let isgameactive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE ='TIE';

    const winningconditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    
    resetbutton.addEventListener('click',resetboard);

})