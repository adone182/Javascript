// refactoring a/ sebuah proses mengubah code agar lbh baik lagi tanpa harus
// mengubah fungsionalitasnya
// kenapa mengunakan refactoring?
// readability (kemudahan dlam membaca program)
// karena kode yg baik itu tidak hanya mudh di baca pembuatnya namun harus mudah dibaca oleh org lain juga
// dry(do not repeat yourself), testability , performance, maintainability
function jmlVolumeKubus (a,b){
    // var total, volumeA, volumeB;
    // volumeA = a * a * a;
    // volumeB = b * b * b;
    // total = volumeA + volumeB;
    return a * a * a + b * b * b;
}

document.writeln(jmlVolumeKubus(2,3));
