// function Declaration
function Nama (name){
    alert('Nama saya : ' + name);
}
console.log(Nama("udin"));
// function yg bisa di panggil dlu lalu di definisikan atau pun sebaliknya
// di definisikan atau deklarasikan dlu bru di panggil
// di function deklarasi bakal jalan karena ada konsep hoisting beda dengan func expresion

// contoh function Expresion
// function yg biasanya di simpan di dalam variable dan bisa tidak menngunakan identifirenya
// beda dengan declaration, expresion harus di definisikan dlu bru di panggil
let Judul = function (film){
    alert('Judul filmnya : ' + film);
}
console.log(Judul("Titanic"));