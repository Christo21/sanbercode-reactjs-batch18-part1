//soal xx
var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]];
var arrObjPeserta = [];

for (let i = 0; i < pesertaLomba.length; i++) {
    arrObjPeserta.push({
        nama : pesertaLomba[i][0],
        gender : pesertaLomba[i][1],
        tinggi : pesertaLomba[i][2]
    });
}

console.log(arrObjPeserta);

//soal xx
function hitungLuasLingkaran(r){
    return 22/7*r*r;
}

function hitungLuasSegitiga(a,t){
    return 1/2*a*t;
}

function hitungLuasPersegi(s){
    return s*s;
}

console.log("Luas Lingkaran : " + hitungLuasLingkaran(14));
console.log("Luas Segitiga : " + hitungLuasSegitiga(6,10));
console.log("Luas Persegi : " + hitungLuasPersegi(5));

//soal xx
var daftarNama = [];

function tambahNama(nama, jenisKelamin) {
    daftarNama.push({
        nama: nama,
        jenisKelamin: jenisKelamin,
        panggilan: jenisKelamin == "laki-laki" ? "Bapak" : jenisKelamin == "perempuan" ? "Ibu" : ""
    });
}

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

var i = 1;
daftarNama.forEach(function (item) {
    console.log(i++ + ". " + item.panggilan + " " + item.nama);
});

//soal xx
var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
var sort = daftarAlatTulis.sort();

var i = 0;
while(i < daftarAlatTulis.length){
    console.log(daftarAlatTulis[i++]);
}