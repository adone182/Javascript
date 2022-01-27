let tanya = true;
while (tanya) {
    // Menangkap pilihan Player(user)
    let p = prompt('Silahkan Pilih Salah Satu : \nSemut, Gajah, atau Orang ');
    // Menangkap pilihan computer
    // kita panggil method js supaya computer pilhannya bisa random
    let comp = Math.random();
    console.log(comp);
    if(comp < 0.34){
        comp = 'Gajah';
    }else if(comp >= 034 && comp < 0.68){
        comp = 'Orang';
    }else{
        comp = 'Semut';
    }
    // Tentukan rules permainannya
    let Hasil = '';
    if(p == comp){
        Hasil= 'SERI';
    }else if(p == 'Gajah'){
        if(comp == 'Orang'){
            Hasil = 'MENANG';
        }else{
            Hasil = 'KALAH';
        }
    }else if(p == 'Orang'){
        Hasil = (comp == 'Gajah') ? 'KALAH' : 'MENANG';
    }else if(p == 'Semut'){
        Hasil = (comp == 'Orang') ? 'KALAH' : 'MENANG';
    }else{
        Hasil = 'memasukan pilihan yang salah';
    }
    // Tampilkan Hasil Outputnya
    alert('Kamu memasukan pilihan : ' + p + '\nComputer memasukan pilihan : ' + comp + '\nmaka hasilnya adalah Kamu : ' + Hasil ); 

    tanya = confirm('Mau main lagi apa nggk cuys ??');
}
    alert('Terima kasih ya sudah bermain ');