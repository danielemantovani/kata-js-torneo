// **Milestone 1 - Scelta dell’arma:**

// ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

// creo un nuovo array con i combattenti e le armi che gli vengono assegnate
const weaponFighter = fighters.map(fighter =>{

    // creo una variabile per generare casualmente l'indice di un oggetto nell'array weapons 
    const randomWeapon = Math.floor(Math.random() * weapons.length);

    // prelevo l'arma corrispondente all'indice generato
    const selectedWeapon = weapons[randomWeapon];

    // rimuovo l'arma prelevata dall'array weapons per evitare che venga presa due volte 
    weapons.splice(randomWeapon, 1);

     // restituisco un nuovo oggetto, copiando i dati del guerriero originale e aggiungendo l'arma assegnata
    return{
        ...fighter, // copia l'oggetto fighter 
        weapon: selectedWeapon // abbinandogli le armi associate
    };

});

console.log("Array dei combattenti con la loro arma",weaponFighter);


// **Milestone 2 - Allenamento:**

// ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

const training = fighters.map(fighter => {

    // genero un numero casuale tra 1 e 100
    const randomPower = Math.random() * (100 - 1) + 1;

    // aumento la potenza del combattente
    const newPower = fighter.power * randomPower;

    return {
        ...fighter, // creo un nuovo oggetto con tutte le proprietà del combattente
        power: Math.floor(newPower) // imposto la nuova potenza arrotondata
    };
});

console.log("Combattenti con potenza aggiornata dopo l'allenamento", training);


// **Milestone 3 - Qualificazione:**

// escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

const selectionFighter = training.filter(fighter =>{

    return fighter.power >= 2000;

});

console.log("Combattenti qualificati per la fase finale del torneo", selectionFighter);


// **Milestone 4 - Combattimento:**

// i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 

// In ogni scontro vincerà il combattente con la potenza più alta. In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.




