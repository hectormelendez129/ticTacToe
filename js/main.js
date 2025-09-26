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
    i += 1; {
        if (i % 2 === 0) {
            box1.innerHTML = 'o';

        } else {
            box1.innerHTML = 'x';

        }
    }
}

function xoSelector2() {
    i += 1; {
        if (i % 2 === 0) {
            box2.innerHTML = 'o';

        } else {
            box2.innerHTML = 'x';

        }
    }
}

function xoSelector3() {
    i += 1; {
        if (i % 2 === 0) {
            box3.innerHTML = 'o';

        } else {
            box3.innerHTML = 'x';

        }
    }
}

function xoSelector4() {
    i += 1; {
        if (i % 2 === 0) {
            box4.innerHTML = 'o';

        } else {
            box4.innerHTML = 'x';

        }
    }
}

function xoSelector5() {
    i += 1; {
        if (i % 2 === 0) {
            box5.innerHTML = 'o';

        } else {
            box5.innerHTML = 'x';

        }
    }
}

function xoSelector6() {
    i += 1; {
        if (i % 2 === 0) {
            box6.innerHTML = 'o';

        } else {
            box6.innerHTML = 'x';

        }
    }
}

function xoSelector7() {
    i += 1; {
        if (i % 2 === 0) {
            box7.innerHTML = 'o';

        } else {
            box7.innerHTML = 'x';

        }
    }
}

function xoSelector8() {
    i += 1; {
        if (i % 2 === 0) {
            box8.innerHTML = 'o';

        } else {
            box8.innerHTML = 'x';

        }
    }
}

function xoSelector9() {
    i += 1; {

        if (i % 2 === 0) {

            box9.innerHTML = 'o';

        } else {

            box9.innerHTML = 'x';

        }
    }
}
//Win Mechanics
function winMechanics() {
    // create a switch case that takes in the value of 
    // the innerhtml text and evaluates to the other boxes

    switch (true) {
        case (box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML):
            console.log("top row ttt")
            break
        case (box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML):
            console.log("daignal")
            break
        case (box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML):
            console.log("col 1")
            break
        default:
            console.log("Default!")

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
}
