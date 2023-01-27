window.addEventListener('DOMContentLoaded',()=>{
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerdisplay = document.querySelector('.display-player');
    const resetbutton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['','','','','','','','',''];
    let currentplayer ='X';
    let isgameactive = true;

    resetbutton.addEventListener('click',resetboard);
    
})