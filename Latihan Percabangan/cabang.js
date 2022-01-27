// Out put *****
// let S = '';
// for(let i = 0 ; i < 5; i++){
//         S += '*'
// }
// console.log(S)

// *****
// *****
// *****
// *****
// *****
// let s = '';
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         s += '*';
//     }
//         s += '\n';
// }
// console.log(s);

// *
// **
// ***
// ****
// *****
// let s = '';
// for(let i = 5; i > 0; i--){
//     for(let j = 5; j >= i; j--){
//         s += '*';
//     }
//         s += '\n';
// }
// console.log(s);


// ***
// **
// *
// let s = '';
// for(let i = 5; i > 0; i--){
//     for(let j = 0; j < i; j++){
//         s += '*';
//     }
//         s += '\n';
// }
// console.log(s);

// *
// **
// ***
// ****
// ***
// **
// *
// let s = '';
// for(let i = 5; i > 0; i--){
//     for(let j = 5; j >= i; j--){
//         s += '*';
//     }
//         s += '\n';
// }
// for(let i = 4; i > 0; i--){
//     for(let j = 0; j < i; j++){
//         s += '*';
//     }
//         s += '\n';
// }
// console.log(s);

// segitiga terbalik 
// var s = '';
// for (var i = 5; i > 0; i--) {
// 	for (var j = 5; j > i; j--) {
// 		s += ' ';
// 	}
// 	for (var k = 0; k < i; k++) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 5; i > 0; i--) {
// 	for (var j = 0; j < i; j++) {
// 		s += ' ';
// 	}
// 	for (var k = 5; k > j; k--) {
// 		s += '*';
// 	}
// 	for (var l = 5; l >= k; l--) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 10; i > 0; i--) {
// 	for (var j = 1; j < i; j++) {
// 		s += ' ';
// 	}
// 	for (var k = 10; k > j; k--) {
// 		s += '*';
// 	}
// 	for (var l = 10; l >= k; l--) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// for (var m = 9; m > 0; m--) {
// 	for (var n = 10; n > m; n--) {
// 		s += ' ';
// 	}
// 	for (var o = 0; o < m; o++) {
// 		s += '*';
// 	}
// 	for (var p = 1; p < o; p++) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

// let s = '';
// for(let i = 0; i < 10 ; i++){
// 	for(let j = 10; j > i; j-- ){
// 		s += ' ';
// 	}
// 	for(let k = 0; k <= i ; k++ ){
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);


let s = '';
for(let i = 10; i > 0 ; i--){
	for(let j = 10; j > i ; j-- ){
		s += ' ';
	}
	for(let k = 0; k < i ; k++ ){
		s += '*';
	}
	s += '\n';
}
console.log(s);

