console.log("Jawaban soal 1");
function halo() {
    return "Halo Sanbers!";
}

console.log(halo());

console.log("================================");
console.log("Jawaban soal 2");
function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log("================================");
console.log("Jawaban soal 3");
function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

console.log("================================");
console.log("Jawaban soal 4");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objPeserta = {
    nama : arrayDaftarPeserta[0], 
    jenisKelamin : arrayDaftarPeserta[1], 
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(objPeserta);

console.log("================================");
console.log("Jawaban soal 5");
var arrayBuah = [{
    nama: "strawberry",
    warna: "merah",
    adaBijinya: "tidak",
    harga: 9000
},{
    nama: "jeruk",
    warna: "oranye",
    adaBijinya: "ada",
    harga: 8000
},{
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: "ada",
    harga: 10000
},{
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: "tidak",
    harga: 5000
}];
console.log(arrayBuah[0]);

console.log("================================");
console.log("Jawaban soal 6");

var dataFilm = [];

function addfilm(nama, durasi, genre, tahun){
    dataFilm.push({nama: nama, durasi: durasi, genre: genre, tahun: tahun});
}

addfilm("It's okay to not be okay","1 jam","drama",2020);
addfilm("Record of youth","40 menit","drama, comedy",2019);

console.log(dataFilm);