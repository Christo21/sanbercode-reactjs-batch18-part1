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
//var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objPeserta = {
    nama : "Asep", 
    jenisKelamin : "laki-laki", 
    hobi : "baca buku",
    tahunLahir : 1992
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

function addfilm(obj){
    dataFilm.push(obj);
}

var objFilm1 = {
    nama : "It's okay to not be okay",
    durasi : "1 jam",
    genre : "drama",
    tahun : 2020
}
var objFilm2 = {
    nama : "Record of Youth",
    durasi : "40 menit",
    genre : "drama, comedy",
    tahun : 2019
}

addfilm(objFilm1);
addfilm(objFilm2);

console.log(dataFilm);