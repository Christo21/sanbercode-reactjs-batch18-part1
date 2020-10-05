console.log("================================");
console.log("Jawaban soal 1");

const pi = 22 / 7;

const hitungLuasLingkaran = (r) => {
    let luas = pi * r * r;
    return luas;
}

const hitungKelilingLingkaran = (r) => {
    let keliling = 2 * pi * r;
    return keliling;
}

console.log("Luas Lingkaran : " + hitungLuasLingkaran(14));
console.log("Keliling Lingkaran : " + hitungKelilingLingkaran(14));


console.log("================================");
console.log("Jawaban soal 2");

let kalimat = "";

const tambahKata = (kata) => {
    kalimat += `${kata} `;
}

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");

console.log(kalimat);


console.log("================================");
console.log("Jawaban soal 3");

const newFunction = function literal(fName, lName) {
    return {fName, lName, fullName(){console.log(`${fName} ${lName}`);}};
}

newFunction("William", "Imoh").fullName();

console.log("================================");
console.log("Jawaban soal 4");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation, spell} = newObject;

console.log(firstName, lastName, destination, occupation)

console.log("================================");
console.log("Jawaban soal 5");

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];

console.log(combined)