// rekursif adalah fungsi yg memangil dirinya sendiri
// looping bisa di jadikan rekursif tpi sebaliknya tidak
// contoh looping
// function Faktorial (n){
//     let hasil = 1;
//     for (let i = n; i > 0; i--) {
//         hasil *= i;
//     }
//     return hasil;
// }

// console.log(Faktorial(6));
// contoh pake looping di rekursif
// nah agar di rekurif tdk terjadi infinite loop maka kita tambahkan base case(kondisi untuk mengeluarkan hasilnya)
function Faktorial(n){
    if(n === 0) return 1;
    return n * Faktorial(n-1);
}
console.log(Faktorial(6));
