//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods

class makeFighter {
    constructor(name, battleCry, superPower, energy) {

        this.name = name
        this.battleCry = battleCry
        this.move = superPower
        this.healthPoint = energy
    }

    //Methods
    knockedOut = function () {
        if (this.healthPoint === 0) {
            alert('K.O.!!')
        } else {
            console.log('Keep Fighting')
        }
    }

    punch = function () {
        console.log(`${this.name} threw a Punch!`)
    }

    kick = function () {
        console.log(`${this.name} threw a Kick!`)
    }

    emote = function () {
        console.log(`${this.name} is dancing!`)
    }
}

let ryu = new makeFighter('Ryu', 'Hiyah!', 'Haduke', 20);

ryu.punch();
ryu.kick();
ryu.emote();
ryu.knockedOut();
