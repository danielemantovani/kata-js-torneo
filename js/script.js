// **Milestone 1 - Scelta dell’arma:**

// ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

// creo un nuovo array con i combattenti e le armi che gli vengono assegnate
const weaponFighter = fighters.map(fighter => {

    // creo una variabile per generare casualmente l'indice di un oggetto nell'array weapons 
    const randomWeapon = Math.floor(Math.random() * weapons.length);

    // prelevo l'arma corrispondente all'indice generato
    const selectedWeapon = weapons[randomWeapon];

    // rimuovo l'arma prelevata dall'array weapons per evitare che venga presa due volte 
    weapons.splice(randomWeapon, 1);

    // restituisco un nuovo oggetto, copiando i dati del guerriero originale aggiungendo l'arma assegnata
    return {
        ...fighter, // copia l'oggetto fighter 
        weapon: selectedWeapon // aggiunge al combattente una nuova proprietà, l'arma 
    };

});

console.log("Array dei combattenti con la loro arma:", weaponFighter);


// **Milestone 2 - Allenamento:**

// ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

const training = fighters.map(fighter => {

    // genero un numero casuale tra 1 e 100
    const randomPower = Math.floor(Math.random() * 100) + 1;


    // aumento la potenza del combattente
    const newPower = fighter.power * randomPower;

    return {
        ...fighter, // creo un nuovo oggetto con tutte le proprietà del combattente
        power: Math.floor(newPower) // imposto la nuova potenza arrotondata
    };
});

console.log("Combattenti con potenza aggiornata dopo l'allenamento:", training);


// **Milestone 3 - Qualificazione:**

// escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

const selectionFighter = training.filter(fighter => {

    return fighter.power >= 2000;

});

console.log("Combattenti qualificati per la fase finale del torneo:", selectionFighter);


// **Milestone 4 - Combattimento:**

// i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 

// In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

let winners = [];

// creo un nuovo guerriero nel caso in cui i combattenti fossero dispari
if(selectionFighter.length % 2 !== 0){

    const newWarrior = {name: "Robot", power:4000};

    selectionFighter.push(newWarrior);
}

for (let i = 0; i < selectionFighter.length; i += 2) {

    const fighter1 = selectionFighter[i];     // primo combattente
    const fighter2 = selectionFighter[i + 1]; // secondo combattente

    // console.log(fighter1, fighter2); 
    
    if (fighter1.power >= fighter2.power) {
        winners.push(fighter1);
        // console.log(fighter1.name, 'win');
    }
    else{
        winners.push(fighter2)
        // console.log(fighter2.name, 'win');
    };

}

console.log("I più forti del torneo sono:", winners);


// **Milestone 5 - Premiazione:**

// tra tutti i vincitori degli scontri, saliranno sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.

const strongerWarriors = winners.sort((a, b) => a.power - b.power);

strongerWarriors.reverse();

const poleWinners= strongerWarriors.slice(0, 3);

console.log("Top 3 dei combattenti più potenti del torneo:", poleWinners);


// **Bonus:**

// Il torneo non finisce qui! Dopo il primo girone di scontri, non passiamo subito alla premiazione, ma facciamo in modo che i vincitori si scontrino ancora e ancora, finchè non ne resterà solo uno!

while (winners.length > 1) {

    const nextRound = [];

    for (let i = 0; i < winners.length; i += 2) {
        const fighter1 = winners[i];
        const fighter2 = winners[i + 1];

        if (!fighter2 || fighter1.power >= fighter2.power) {
            nextRound.push(fighter1); 
        } else {
            nextRound.push(fighter2); 
        }
    }

    winners = nextRound; // aggiorna i partecipanti per il prossimo turno
}

console.log("Campione finale:", winners[0]);



