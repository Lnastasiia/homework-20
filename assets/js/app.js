/*1

for(let i = 0; i <= 100; i++){
    alert(i);
}
*/

/*2

for(let i = 21; i <= 57; i++){
    alert(i);
}
*/

/*3

for(let i = 2; i <= 100; i++){
    if(i % 2 ==0){
        alert(i);
    }
    
}
*/

/*4
let sum = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
    alert(sum);
}
*/

let prime = 0;
for(let i = 3; i <= 1000; i++){

   let division = 0;

   for(let j = 1; j <= i; j++){
       if(i % j == 0){
           division = division + 1;
       }
   }
   if(division <= 2){
       prime = prime +1;
       alert(i);
   }
   console.log(`Всего простых чисел:  ${prime}`);
}

