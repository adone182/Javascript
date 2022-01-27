let angkot = 1;
let total = 10;
let angkotberoperasi= 6;
while(angkot <= angkotberoperasi){
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
   angkot++; 
}
for(angkot = angkotberoperasi + 1; angkot <= total; angkot++){
    console.log('Angkot No. ' + angkot + '  sedang tidak beroperasi.')
}