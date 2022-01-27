// Array adalah suatu tipe data yg digunakan untuk menyimpan nilai atau variable (yg bisa berupa bool,string,number)
// yg tiap elementnya memiliki index
// array dpt di artikan juga variabel yg lbh sakti karna dpt menampung bnyk nilai,mau sama atau beda
// pada javascript array bertipe object

// menambahkan array secara manual
const arr = [];
arr[0]= "Sofia";
arr[1]= "Saputra";
arr[2]= "Suci";
arr[3]= "Sulaiman";
console.log(arr);

// menghapus array secara manual
// kalo di js ketika menghapus array tdk otomatis kehapus tpi lebih di timpa oleh nilai undefined
const arr1 = ["sofia", "saputra", "suci", "darma"];
arr1[3]= undefined;
console.log(arr1);
console.log();
// menampilkan array satu persatu menggunakan loop
const arr2 = ["sofia", "saputra", "suci", "darma"];
for (let i = 0; i < arr2.length; i++) {
    console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr2[i]);
}
console.log();
// method pada array
// 1. join(untuk merubah isi array menjadi string)
const arr3 = ["sofia", "saputra", "suci", "darma"];
console.log(arr3.join());
console.log();
// 2. push(untuk menambah/memasukan value baru ke array di bagian akhir)
// untuk pop isinya bisa langsung bnyk beda dgn pop yg harus satu satu untuk hapusnya
const arr4 = ["sofia", "saputra", "suci", "darma"];
arr4.push("Satria","ucup","sanusi");
console.log(arr4.join(' - '));
console.log();
// 3. pop(untuk mengahapus value array pd bagian akhirnya)
const arr5 = ["sofia", "saputra", "suci", "darma"];
arr5.pop();
console.log(arr5.join(' - '));
console.log();

// 4. unshift(fungsinya sama seperti push cmn kalo unshift menambahkan di awal array)
const arr6 = ["sofia", "saputra", "suci", "darma"];
arr6.unshift("sunander", "ajib");
console.log(arr6.join(' - '));
console.log();

// 5. shift(ini fungsinya sama seperti pop yaitu untuk menghapus nilai cmn shift hapusnya di index yg awal)
const arr7 = ["sofia", "saputra", "suci", "darma"];
arr7.shift();
console.log(arr7.join(' - '));
console.log();
// 6. splice(untuk menyambungkan array di tengah2nya sesuai kita mau di sambung dmna)
// splice(indexAwalnya, maudihapusberapa, elemenBarunya1, elemenBarunya2, .... )
const arr8 = ["sofia", "saputra", "suci", "darma"];
// arr8.splice(2, 0, "dading", "family", "ceria");//ini artinya mau menambahkan element yg di mulai dari index 2 gk ada element yg di hapus
// serta menambahkan element barunya di belakangnya outputnya jd sofia saputra dading family ceria suci darma
arr8.splice(1, 3,"adit", "sopo", "jarwo" ) ; //iniartinya mau nambahin elemenya mulai dri index 1 dan menhapus 3element dan menambahkan value baru, outputnya jdi sofia adit sopo jarwo
console.log(arr8.join(' - '));
console.log();

// 7. slice(fungsinya untuk mengiris atau memtong array dan mengganti atau istilahnya di pindahin ke array baru)
// jdi kita harus masukin ke dlm variable yg isinya array bru itu
// splice(nilaiAwal yg mau di bawa, nilai akhirnya)
const arr9 = ["sofia", "saputra", "suci", "darma"];
// jadi ini contohnya saya mau mengambil saputra dan suci nah maka saya harus masukan index awalnya satu dan index akhirnya 3
// jadi index awalnya di ambil index akhirnya nggk atau bisa di sebut juga index 3 untuk memberhentikan potongan
const arr10 = arr9.slice(1,3);// jadi outputnya pasti saputra dan suci, nah kalo mau darmanya ke bawa juga jdi index akhirnya di ganti jd 4
console.log(arr10.join(' - '));
// nah arr9 tdi buka berarti jdi hilang ketika kita sudah slice kita masih bisa akses lg
console.log(arr9.join(' - '));
