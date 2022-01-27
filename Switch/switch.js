let h1 = document.querySelector('.h1');
h1.innerHTML= 'Anjing Lu';
h1.style.backgroundColor= ' red';
// karena apapun yg di inputkan user kedalam prompt
// pasti hasil nya akan mengembalikan nilai string
// nah makanya kita paksa promptnnya biar ngeluarin nilainya integer dengan bantuan method
// pada javascript yaitu parseInt untuk merubah nilai menjadi integer
let Angka = parseInt(prompt('masukin aku dong ...'));
switch (Angka) {
    case 1:
      alert('ini angka 1');
    break;
    case 2:
        alert('ini angka 2');
    break;
    case 3:
        alert('ini angka 3');
    break;
    case 4:
        alert('ini angka 4');
    break;
    case 5:
        alert('ini angka 5');
    break;
    default:
        break;
}



// case 2

let itemLu = prompt('Silahkan Pilih Makanan : \n cth(Sayur asem, Anggur, Tempe, Nasi goreng, hamburger, pizza)');
switch(itemLu){
    case 'Sayur asem':
    case  'Anggur':
    case 'Tempe':
        alert('Pilihan Anda Bagus makanan sehat itu');
        break;
    case 'Nasi goreng':
    case 'hamburger':
    case 'pizza':
        alert('Pilihan makanan anda tidak sehat tau');
        break;
    default:
        alert('Si tolol menu makanan itu gak ada tau');
        break;
}