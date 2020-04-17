// Soldier
function Soldier(health, strength) {
    this.health = health,
    this.strength = strength
}

Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else { 
        return `${this.name} has died in act of combat`
    }
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(health, strength);
    this.health = health;
    this.strength = strength;
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else { 
        return "A Saxon has died in combat"
    }
}



// War
function War() {
    this.vikingArmy = [],
    this.saxonArmy = []
}

War.prototype.addViking = function (viking) {
    
    this.vikingArmy.push(viking)
}

War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon)
}

War.prototype.vikingAttack = function () {
    let chosenViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    
    const fightResult = chosenSaxon.receiveDamage(chosenViking.strength);
    
    const afterAttackSaxonArmy = this.saxonArmy;
    this.saxonArmy = afterAttackSaxonArmy.filter( (saxon) => {
        return saxon.health > 0
    })
    return fightResult
}

War.prototype.saxonAttack = function () {
    let chosenViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let chosenSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    
    const fightResult = chosenViking.receiveDamage(chosenSaxon.strength);
    
    const afterAttackVikingArmy = this.vikingArmy;
    this.vikingArmy = afterAttackVikingArmy.filter( (viking) => {
        return viking.health > 0
    })
    return fightResult;
}

War.prototype.showStatus = function () {
    if (this.vikingArmy.length && this.saxonArmy.length) {
        return "Vikings and Saxons are still in the thick of battle."
    } else {
        if ( !this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if ( !this.vikingArmy.length) {
            return "Saxons have fought for their lives and survive another day..."
        }
    }
}

let war1 = new War()

let viking1 = new Viking (111, 5, 5);
let viking2 = new Viking (222, 5, 5);
let viking3 = new Viking (333, 5, 5);

let saxonA = new Saxon (5, 5);
let saxonB = new Saxon (5, 5);
let saxonC = new Saxon (5, 5);

war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);
war1.addSaxon(saxonA);
war1.addSaxon(saxonB);
war1.addSaxon(saxonC);

war1.vikingAttack()
war1.saxonAttack()
war1.saxonAttack()

console.log('viking1',viking1);
console.log('war1',war1);


