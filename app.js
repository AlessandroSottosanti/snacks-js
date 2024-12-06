import chalk from "chalk";

// **SNACK 1**

const words = [
    "apple",
    "banana",
    "cherry",
    "dog",
    "elephant",
    "flower",
    "grape",
    "house",
    "island",
    "jungle",
    "kite",
    "lemon",
    "mountain",
    "notebook",
    "orange",
    "piano",
    "queen",
    "river",
    "sunshine",
    "tree",
    "umbrella",
    "violet",
    "window",
    "xylophone",
    "yacht",
    "zebra"
];

const minChars = 4;


const filterByLength = (words, minChars) => {
    const longWords = [];
    words.map(curWord => {

        if (curWord.length > minChars) {
            longWords.push(curWord);
        }

    });
    return longWords;
}



const longWords = filterByLength(words, minChars);


console.log(longWords);

// **SNACK 2**


// GENERO 20 NUMERI CASUALI
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }
    return numbers;
}

const randomNumbers = generateRandomNumbers();

console.log(randomNumbers);

// PRIMI 10 NUMERI DELL'ARRAY
const first10Nums = randomNumbers.slice(0, 10);

console.log(first10Nums);

// SOMMA
const CalculateSum = (first10Nums) => {
    let total = 0;
    first10Nums.forEach(num => {
        total += num;
    });
    return total;
}

let total = CalculateSum(first10Nums);
console.log('Somma:', total);


// MEDIA
const calculateAverage = (total, first10Nums) => {
    let average = 0;
    average = total / first10Nums.length;
    return average;
}

const average = calculateAverage(total, first10Nums);

console.log('Media:', average);


// SNACK 3

const names = ["Luca", "Sofia", "Marco", "Giulia", "Matteo", "Alessia", "Davide", "Elena", "Simone", "Chiara"];
const lastNames = ["Rossi", "Bianchi", "Ferrari", "Esposito", "Ricci", "Marino", "Greco", "Conti", "De Luca", "Costa"];

const gatsby = (names, lastNames) => {

    const namesIndexes = [];
    const lastNamesIndexes = [];

    // ottengo tre numeri casuali compresi nell'indice massimo dell'array

    for (let i = 0; i < 3; i++) {

        const randomNumber = Math.floor(Math.random() * names.length);
        namesIndexes.push(randomNumber);

        const randomNumber2 = Math.floor(Math.random() * names.length);
        lastNamesIndexes.push(randomNumber2);
    }

    console.log('array di indici casuali per i nomi:', namesIndexes);
    console.log('array di indici casuali per i cognomi:', lastNamesIndexes);

    // ottengo i nomi completi
    let newNames = createNewNames(namesIndexes, lastNamesIndexes, names, lastNames);

    return newNames;
}

// funzione per ottenere i nomi completi  -- Sono due array di nomi con la stessa lunghezza e questo mi permette di ridurre il codice
const createNewNames = (namesIndexes, lastNamesIndexes, names, lastNames) => {
    let newNames = [];

    namesIndexes.forEach((nameIndex, i) => {
        const lastNameIndex = lastNamesIndexes[i];
        const fullname = `${names[nameIndex]} ${lastNames[lastNameIndex]}`;
        newNames.push(fullname); 
    });

    return newNames;
};


const falseGuestsArray = gatsby(names, lastNames);



console.log(chalk.yellow('Lista invitati: ') + chalk.green(falseGuestsArray.join(', ')));


// SNACK 4

