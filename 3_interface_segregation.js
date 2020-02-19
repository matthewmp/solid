/*
    Lets say we are making a game where you can build an army.  The army is broken up
    into separate sub types (archers, swordsmen, wizards etc).  Each subtype has the 
    ability to attack, rest, eat etc.

    A poor example of a class to bring these characters to life would be:
*/

// Start by making a super class of soldier with a generic ability to attack
class bad_Soldier{
    constructor(){
        this.lifeEnergy = 10;
    }

    sleep(){
        console.log('I am sleeping');
    }

    eat(){
        console.log('I am eating');
    }

    shootArrow(){
        console.log('I am attacking');
    }

    swingSword(){
        console.log('I am swinging swoord');
        }

        useMagic(){
            console.log('Casting spell');
        }
    }

/*
    The above class has every attack capability of an Archer, Swordsman, and Wizzard.
    One could extend this class for an Archer and simply not use the other attack methods.
    ie:
*/

class bad_Archer extends bad_Soldier{
    constructor(){
        super();
    }

    attack(){
        this.shootArrow();
    }
}

/*
    Once instatiated you could simply use the attack method to shoot arrows.
    Even though this would technically work there are all of the other 
    attack methods baked into this class under the hood.
    ie.
*/

let archer0 = new bad_Archer();
archer0.swingSword() // I am swinging swoord

/*
    An archer should not be able to attack with a sword.  These 
    instances have useless methods attached to them and can be accessed
    by other programmers unexpectedly.

    Using the Interface Segregation Principle we would abstract out the
    different attack modes then incorporate them into the appropriate 
    class later.

    ie
*/

/*
    First of all the original Soldier class breaks the Single Responsiblity Principle of
    S.O.L.I.D.  We should abstract out all of the characteristics that all soldiers will
    have and extend the subtypes of soldiers into their own class.

    ie.
*/

class Soldier{
    constructor(){
        this.lifeEnergy = 10;
    }

    sleep(){
        console.log('I am sleeping');
    }

    eat(){
        console.log('I am eating');
    }
}

/*
    Now using the Interface Segregation principle we abstract out
    the various attack methods
*/

const archerAttack = {
    shootArrow(){
        console.log('Shooting Arrow');
    }
}

const swordsmanAttack = {
    swingSword(){
        console.log('Swinging Sword');
    }
}

const wizardAttack = {
    castSpell(){
        console.log('Casting Spell');
    }
}

/*
    Now we can extend the soldier class with the various subtypes
    ie.
*/

class Archer extends Soldier{
    constructor(){
        super();
    }
}

class Swordsman extends Soldier{
    constructor(){
        super();
    }
}

class Wizard extends Soldier{
    constructor(){
        super();
    }
}

/*
    Now we can assign the appropriate attack method to the 
    appropriate class using Object.assign on the prototype
    of each class
*/

Object.assign(Archer.prototype, archerAttack);
Object.assign(Swordsman.prototype, swordsmanAttack);
Object.assign(Wizard.prototype, wizardAttack);

let archer1 = new Archer();
let swordsman1 = new Swordsman();
let wizzard1 = new Wizard();

archer1.shootArrow() //  Shooting Arrow 
swordsman1.swingSword() //  Swinging Sword
wizzard1.castSpell() //  Casting Spell

/*
    Now all of the instances have access to the 
    appropriate attack method without having
    any useless methods that are not needed.
*/