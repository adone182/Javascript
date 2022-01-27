let total = 10;
let angkotberoperasi= 6;

for (let angkot = 1;angkot <= total;angkot++) {
    if(angkot <= angkotberoperasi && angkot !== 5){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    }else if(angkot === 8 || angkot === 10 || angkot === 5){
        console.log('Angkot No. ' + angkot + ' sedang lembur');
    }else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
}