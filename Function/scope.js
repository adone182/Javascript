// var scope(lingkup variable)
// bagaimana sebuah variable dpt di akses dalam program
// dalam bahasa pemograman ad 2 jenis scope
// yaitu block scope dan function scope
// nah javascript menngunakan function script
let a = 1; // ini dinamakan global scope artinya bisa di pakai dmna saja
// kalo di dalam function kita bisa akses variable global tapi kalo di luar kita tidak bisa akses
// variable lokal karena var lokal hny bsa di gunakan di dlm scope function saja

// function asI(){
//     let b = 2;
// }
// asI(b)
// kode diatas pasti error krna di luar kita gk bisa panggil var lokal
// beda sama kode di bawah ini

function tes (){
    let b = 2;
    console.log(b);
    console.log(a);
}
console.log(tes(a));