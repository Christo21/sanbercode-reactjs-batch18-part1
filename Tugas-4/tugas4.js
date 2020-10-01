console.log("Jawaban soal 1");
var count = 1;
console.log("LOOPING PERTAMA");
while (count <= 20) {
    if(count % 2 == 0){
        console.log(count + " - I love coding");
    }
    count++;
}
var count = 20;
console.log("LOOPING PERTAMA");
while (count > 0) {
    if(count % 2 == 0){
        console.log(count + " - I will become a frontend developer");
    }
    count--;
}

console.log("================================");
console.log("Jawaban soal 2");
for (let index = 1; index <= 20; index++) {
    if(index%2==1){
        if(index%3==0){
            console.log(index + " - I Love Coding");
        }else{
            console.log(index + " - Santai");
        }
    } else if(index%2==0){
        console.log(index + " - Berkualitas");   
    }
}

console.log("================================");
console.log("Jawaban soal 3");
for (let i = 1; i <= 7; i++) {
    var result = "";
    for (let j = 1; j <= i; j++) {
        result += "#";
    }
    console.log(result);
}

console.log("================================");
console.log("Jawaban soal 4");
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

console.log("================================");
console.log("Jawaban soal 5");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var arr = daftarBuah.sort();
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}