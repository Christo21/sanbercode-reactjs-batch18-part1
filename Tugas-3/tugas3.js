//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var newKataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
var newKataKeempat = kataKeempat.toUpperCase();

var result = kataPertama + " " + newKataKedua + " " + kataKetiga + " " + newKataKeempat;
console.log("Jawaban soal 1");
console.log(result);
console.log("================================");


//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var newKataPertama = parseInt(kataPertama);
var newKataKedua = parseInt(kataKedua);
var newKataKetiga = parseInt(kataKetiga);
var newKataKeempat = parseInt(kataKeempat);

var result = newKataPertama + newKataKedua + newKataKetiga + newKataKeempat;
console.log("Jawaban soal 2");
console.log(result);
console.log("================================");


//soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Jawaban soal 3");
console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);
console.log("================================");


//soal 4
console.log("Jawaban soal 4");
var nilai = 67;
console.log("nilai : " + nilai);
if (nilai >= 80) { console.log('indeks : A'); }
else if (nilai >= 70 && nilai < 80) { console.log('indeks : B'); }
else if (nilai >= 60 && nilai < 70) { console.log('indeks : C'); }
else if (nilai >= 50 && nilai < 60) { console.log('indeks : D'); }
else { console.log('indeks : E'); }
console.log("================================");


//soal 5
var tanggal = 6;
var bulan = 7;
var tahun = 1998;

var newBulan;
switch(bulan){
    case 1: {newBulan="Januari";break;}
    case 2: {newBulan="Februari";break;}
    case 3: {newBulan="Maret";break;}
    case 4: {newBulan="April";break;}
    case 5: {newBulan="Mei";break;}
    case 6: {newBulan="Juni";break;}
    case 7: {newBulan="Juli";break;}
    case 8: {newBulan="Agustus";break;}
    case 9: {newBulan="September";break;}
    case 10: {newBulan="Oktober";break;}
    case 11: {newBulan="November";break;}
    case 12: {newBulan="Desember";break;}
}

console.log("Jawaban soal 5");
console.log(tanggal+" "+newBulan+" "+tahun);
console.log("================================");