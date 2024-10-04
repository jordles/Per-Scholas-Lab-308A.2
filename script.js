// /* -------------------------------------------------------------------------- */
// /*                          PART 1: HUMBLE BEGINNINGS                         */
// /* -------------------------------------------------------------------------- */

// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//       name: "Leo",
//       type: "Cat",
//       companion: {
//         name: "Frank",
//         type: "Flea",
//         inventory: ["small hat", "sunglasses"]
//       }
//   },
//   roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//   }
// }

// adventurer.inventory.forEach((item) => {
//   console.log(item);
// })

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

// /* -------------------------------------------------------------------------- */
// /*                            PART 2: CLASS FANTASY                           */
// /* -------------------------------------------------------------------------- */

// class Character {
//   static MAX_HEALTH = 100;
//   constructor (name) {
//     this.name = name;
//     this.health = Character.MAX_HEALTH;
//     this.inventory = [];
//   }
//   roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//   }
// }

// /* const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin);
// robin.roll(); */

// /* -------------------------------------------------------------------------- */
// /*                           PART 3: CLASS FEATURES                           */
// /* -------------------------------------------------------------------------- */
// class Companion {
//   constructor (name, type) {
//     this.name = name;
//     this.type = type;
//     this.loyalty = 100;
//   }
// }

// class Adventurer extends Character {
//   static ROLES = ['Fighter', 'Healer', 'Wizard', 'Ranger'];
//   constructor (name, role, companionName, companionType) {
//     super(name);
//     if (!Adventurer.ROLES.includes(role)) {
//       throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(', ')}`);
//     }
//     this.role = role;
//     // Every adventurer starts with a bed and 50 gold coins.
//     this.inventory.push("bedroll", "50 gold coins");
//     this.companion = new Companion(companionName, companionType);
//   }
//   // Adventurers have the ability to scout ahead of them.
//   scout () {
//     console.log(`${this.name} is scouting ahead...`);
//     super.roll();
//   }

//   dropItem(item){
//     this.inventory = this.inventory.filter( data => data !== item);
//   }
//   addItem(item){
//     this.inventory.push(item);
//   }
//   takeDamage(damage) {
//     this.health -= damage;
//   }
//   // Duel method
//   duel(opponent) {
//     if (!(opponent instanceof Adventurer)) {
//       throw new Error("Opponent must be an instance of Adventurer.");
//     }

//     console.log(`${this.name} challenges ${opponent.name} to a duel!`);

//     while (this.health > 50 && opponent.health > 50) {
//       const myRoll = Math.floor(Math.random() * 20) + 1; // Roll for this adventurer
//       const opponentRoll = Math.floor(Math.random() * 20) + 1; // Roll for opponent

//       console.log(`${this.name} rolled: ${myRoll} | ${opponent.name} rolled: ${opponentRoll}`);

//       // Determine who loses health
//       if (myRoll < opponentRoll) {
//         this.takeDamage(1);
//         console.log(`${this.name} loses 1 health! Current health: ${this.health}`);
//       } else if (myRoll > opponentRoll) {
//         opponent.takeDamage(1);
//         console.log(`${opponent.name} loses 1 health! Current health: ${opponent.health}`);
//       } else {
//         console.log("It's a tie! No health lost.");
//       }
//     }

//     // Declare the winner
//     if (this.health <= 50) {
//       console.log(`${opponent.name} wins the duel!`);
//     } else {
//       console.log(`${this.name} wins the duel!`);
//     }
//   }
// }

// const robin2 = new Adventurer("Robin", "Ranger");
// robin2.dropItem("bedroll");
// console.log(robin2);


// const robin = new Adventurer("Robin", "Ranger", "Wolf", "Animal");


// /* -------------------------------------------------------------------------- */
// /*                          PART 5: GATHER YOUR PARTY                         */
// /* -------------------------------------------------------------------------- */

// /* class AdventurerFactory {  
//   constructor (role) {
//     this.role = role;
//     this.adventurers = [];
//   }
//   generate (name) {
//     const newAdventurer = new Adventurer(name, this.role);
//     this.adventurers.push(newAdventurer);
//   }
//   findByIndex (index) {
//     return this.adventurers[index];
//   }
//   findByName (name) {
//     return this.adventurers.find((a) => a.name === name);
//   }
// }

// const healers = new AdventurerFactory("Healer");
// const robin = healers.generate("Robin");
//  */
// /* -------------------------------------------------------------------------- */
// /*                          PART 6: DEVELOPING SKILLS                         */
// /* -------------------------------------------------------------------------- */
// const jordles = new Adventurer("Jordles", "Fighter", "Eagle", "Bird");

// console.log(robin);
// robin.duel(jordles);


/* -------------------------------------------------------------------------- */
/*                       WHAT WE DID TOGETHER AS A GROUP                      */
/* -------------------------------------------------------------------------- */

// Part 1
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "flea",
      inventory: ["hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
adventurer.inventory.forEach((item) => {
  console.log(item);
});
adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();

// Part 2
class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }
}
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3 & 4
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role, companionName, companionType) {
    super(name);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.includes(role)) {
      this.role = role;
    } else {
      throw "Role not found";
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.companion = new Companion(companionName, companionType);
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  drop(item) {
    // new ability
    this.inventory = this.inventory.filter((obj) => {
      return obj !== item;
    });
  }
  heal() {
    this.health = this.MAX_HEALTH;
  }
  takeDamage(points) {
    this.health -= points;
    if (this.health <= 0) {
      this.die();
    }
  }
  die() {
    console.log(`${this.name} has died`);
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
  singleRound(adversary) {
    const selfRoll = this.roll();
    const adversaryRoll = adversary.roll();
    if (selfRoll > adversaryRoll) {
      adversary.takeDamage(1);
    } else {
      this.takeDamage(1);
    }
    console.log(
      `${this.name} Roll`,
      selfRoll,
      `${adversary.name} Roll`,
      adversaryRoll,
      `${this.name} Health`,
      this.health,
      `${adversary.name} Health`,
      adversary.health
    );
  }
  duel(adversary) {
    console.log(adversary);
    while (this.health > 50 && adversary.health > 50) {
      this.singleRound(adversary);
    }
  }
}
// const robin = new Adventurer("Robin", "archer");

class Companion {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.loyalty = 100;
  }
  takeLoyalty(points) {
    this.loyalty -= points;
  }
  healLoyalty() {
    this.loyalty = 100;
  }
}
// const robin = new Adventurer("Robin", "Fighter", "Leo", "cat");
// console.log(robin);

// Part 5
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role, "Bob", "cat");
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");
const fighters = new AdventurerFactory("Fighter");
const hood = fighters.generate("Hood");

console.log(healers.findByName("Robin"));
healers.findByName("Robin").duel(fighters.findByName("Hood"));