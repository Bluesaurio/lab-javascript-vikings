// Soldier
class Soldier {
  constructor(hp, str) {
    this.health = hp;
    this.strength = str;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, hp, str) {
    super(hp, str);
    this.name = name;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking) {
        viking.push(this.vikingArmy)
    };
    addSaxon(saxon) {
        saxon.push(this.saxonArmy)
    };
    vikingAttack() {

        let randomSax = Math.random() * this.saxonArmy.length;
        let randomSaxIndex = Math.floor(randomSax);
        let randomVik = Math.random() * this.vikingArmy.length;
        let randomVikIndex = Math.floor(randomVik);

        this.saxonArmy[randomSaxIndex] receiveDamage(this.vikingArmy[randomVikIndex].str)

    };
    saxonAttack() {};
    showStatus() {};
    
}
