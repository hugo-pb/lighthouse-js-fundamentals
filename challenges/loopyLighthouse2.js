
let loopyLighthouse = (range, multiples, words) => {
  n = '';
for(let i = range[0]; i <= range[1]; i++){
 if(i % 2 === 0 && i % 5 === 0){
  n += 'BattyBeacon '
 }else if(i % 2 ===0) {
  n += 'Batty '
 }else if(i % 5 ===0) {
  n += 'Beacon '
 }else {
n += i + ' '
 }
}return n;
}

console.log(loopyLighthouse([15, 50], [2, 5], ["Batty", "Beacon"]));