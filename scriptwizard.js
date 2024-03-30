// Create a class named ScriptWizard
class ScriptWizard {
    constructor() {
        this.spells = [];
    }

    // Method: learn a new spell
    learnSpell(spell) {
        this.spells.push(spell);
        console.log(`Learned ${spell} as a new spell.`);
    }

    // Method: forget a spell
    forgetSpell(spell) {
        const index = this.spells.indexOf(spell);
        if (index !== -1) {
            this.spells.splice(index, 1);
            console.log(`Forgot ${spell} as a spell.`);
        } else {
            console.log(`${spell} is not found in the learned spells.`);
        }
    }

    // Method: list all learned spells
    listSpells() {
        console.log("Learned spells:");
        this.spells.forEach(spell => {
            console.log(spell);
        });
    }
}

// Create an instance of ScriptWizard named myScriptWizard
const myScriptWizard = new ScriptWizard();

// Learn spells
myScriptWizard.learnSpell("Fireball");
myScriptWizard.learnSpell("Teleportation");
myScriptWizard.learnSpell("Invisibility");

// List all learned spells
myScriptWizard.listSpells();

// Forget a spell
myScriptWizard.forgetSpell("Teleportation");

// List all learned spells after forgetting
myScriptWizard.listSpells();
