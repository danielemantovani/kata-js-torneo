// **Milestone 1 - Scelta dell’arma:**

// ogni combattente sceglierà casualmente un'arma dalla relativa lista. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

// creo un nuovo array con i guerrieri e le armi che gli vengono assegnate
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

console.log(weaponFighter);


