//activate listener for boxes

const box1 = document.querySelector('.box1')
box1.addEventListener('click', xoSelector1)

const box2 = document.querySelector('.box2')
box2.addEventListener('click', xoSelector2)

const box3 = document.querySelector('.box3')
box3.addEventListener('click', xoSelector3)

const box4 = document.querySelector('.box4')
box4.addEventListener('click', xoSelector4)

const box5 = document.querySelector('.box5')
box5.addEventListener('click', xoSelector5)

const box6 = document.querySelector('.box6')
box6.addEventListener('click', xoSelector6)

const box7 = document.querySelector('.box7')
box7.addEventListener('click', xoSelector7)

const box8 = document.querySelector('.box8')
box8.addEventListener('click', xoSelector8)

const box9 = document.querySelector('.box9')
box9.addEventListener('click', xoSelector9)

//Add XO into boxes - FIND BETTER WAY (OOP??)
//Activate x and o toggle
let i = 0;

function xoSelector1() {
    i += 1;
    if (i % 2 === 0) {
        box1.innerHTML = 'o';

    } else {
        box1.innerHTML = 'x';

    }
    console.log(box1.innerHTML)
    winMechanics();
}

function xoSelector2() {
    i += 1;
    if (i % 2 === 0) {
        box2.innerHTML = 'o';

    } else {
        box2.innerHTML = 'x';

    }
    console.log(box2.innerHTML)
    winMechanics();
}

function xoSelector3() {
    i += 1;
    if (i % 2 === 0) {
        box3.innerHTML = 'o';

    } else {
        box3.innerHTML = 'x';

    }
    console.log(box3.innerHTML)
    winMechanics();

}

function xoSelector4() {
    i += 1;
    if (i % 2 === 0) {
        box4.innerHTML = 'o';

    } else {
        box4.innerHTML = 'x';

    }
    console.log(box4.innerHTML)
    winMechanics();

}

function xoSelector5() {
    i += 1;
    if (i % 2 === 0) {
        box5.innerHTML = 'o';

    } else {
        box5.innerHTML = 'x';

    }
    console.log(box5.innerHTML)
    winMechanics();

}

function xoSelector6() {
    i += 1;
    if (i % 2 === 0) {
        box6.innerHTML = 'o';

    } else {
        box6.innerHTML = 'x';

    }
    console.log(box6.innerHTML)
    winMechanics();

}

function xoSelector7() {
    i += 1;
    if (i % 2 === 0) {
        box7.innerHTML = 'o';

    } else {
        box7.innerHTML = 'x';

    }
    console.log(box7.innerHTML)
    winMechanics();

}

function xoSelector8() {
    i += 1;
    if (i % 2 === 0) {
        box8.innerHTML = 'o';

    } else {
        box8.innerHTML = 'x';

    }
    console.log(box8.innerHTML)
    winMechanics();

}

function xoSelector9() {
    i += 1;
    if (i % 2 === 0) {
        box9.innerHTML = 'o';
    } else {
        box9.innerHTML = 'x';
    }
    console.log(box9.innerHTML)
    winMechanics();
}

//Win Mechanics
//Activate gameStatus
const gameStatus = document.getElementById('gameStatus');

function winMechanics() {
    // create a switch case that takes in the value of 
    // box[i].innerhtml text and evaluates to the other boxes
    // make rule for empty boxes 

    switch (true) {
        //Row Logic

        case (box1.innerHTML !== '' && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML):
            gameStatus.innerText = 'Top Row Won'
            break
        case (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML):
            gameStatus.innerText = 'Middle Row Won'
            break
        case (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML):
            gameStatus.innerText = 'bottom row'
            break

        //Column Logic

        case (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML):
            gameStatus.innerText = 'column 1 Won'
            break
        case (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML):
            gameStatus.innerText = 'Column 2 Won'
            break
        case (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML):
            gameStatus.innerText = 'Column 3 Won'
            break

        //Diagnal logic

        case (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML):
            gameStatus.innerText = 'daignal 1-9'
            break
        case (box3.innerHTML !== '' && box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML):
            gameStatus.innerText = 'diagnal 3-7'
            break

        case (box1.innerHTML !== '' && box2.innerHTML !== '' && box3.innerHTML !== '' && 
            box4.innerHTML !== '' && box5.innerHTML !== '' && box6.innerHTML !== '' && 
            box7.innerHTML !== '' && box8.innerHTML !== '' && box9.innerHTML !== ''):
            gameStatus.innerHTML = 'Draw, Please Reset The Game!'
        //set default to draw
        default:
            gameStatus.innerHTML = 'Nice Move!'
            break;
    }
}


//Activate Reset Button
document.querySelector('#resetBtn').addEventListener('click', reset)
//Reset All Boxes To undefined
function reset() {
    box1.innerHTML = '';

    box2.innerHTML = '';

    box3.innerHTML = '';

    box4.innerHTML = '';

    box5.innerHTML = '';

    box6.innerHTML = '';

    box7.innerHTML = '';

    box8.innerHTML = '';

    box9.innerHTML = '';
    gameStatus.innerText = 'Status: '; //reset game status
    i = 0; //reset toggle
}
