// study kasus buat function volume kubus
// parameter a/ variabel yg ditulis ketika function dibuat yg gunanya u/menyimpan nilai yg dikirim saat function di panggil
// sedangkan Argument nilai yg dikirmkan saat function di panggil
function jmlVolumeKubus (a,b){
    var total, volumeA, volumeB;
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;
    return total;
}

document.writeln(jmlVolumeKubus(8,3));

function tambah(a,b){
    return a + b ;
}

function kali(a,b){
    return a * b ;
}

let c = parseInt(prompt("MASUKAN nilai pertama : "));
let d = parseInt(prompt("MASUKAN nilai kedua : "));
total = tambah(c * 3, d * 5);
console.log(total);
let a = 10;
let b = 23;
hasil = a * b;
console.log(hasil);
console.log(kali(tambah(8, 4), tambah(9, 3)));
console.log(tambah(kali(2, 3), kali(4, 6)));

// apabila nilai argumentnya lebuh banyak dri pada parameter
// maka argument terakhir tidak akan di anggap atau akan di hiraukan
function nam(nama, umur) {
    return nama + ' ' + umur;
}

console.log(nam("aji", 20, 1994)) //maka argument 1994 akan di abaikan

// apabila parameternya lebih banyak dari argument
// maka nilai akhirnya akan di isi dengan nilai default yaitu undefind
function nama(nama, umur, tahunLahir) {
    return nama + ' ' + umur + ' ' + tahunLahir;
}

console.log(nama("aji", 20))//maka tahunLahir akan diisi dgn nilai undefind

// argumnents adalah array yg berisi nilai yg dikirim saat function di panggil
// beda ya argument sama arguments
// Ini bisa di sebut juga sudo variable atau variabel semu
// jadi dia ada cmn gk keliatan kaya hantu haha
// ini digunakan biar lebih fleksible gk nambah nambah angka atau parameter maupun argument

function tambahIn() {
    let hasil= 0
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

let coba = tambahIn(1,2,3,4,5,6,7,7,7,8,8,8,8,8,9,3,4);
console.log(coba);

