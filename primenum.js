let count_factors = 0;

function checkPrime(number){

for(let i=0;i<=number/2;i++){

   if(number%i == 0){
     count_factors++;
   }
}

if(count_factors == 1){
   return true;
   }
else{
   return false;
   }
}

let result = checkPrime(13);

if(result == true){
  console.log("Prime Number");
}
else{
  console.log("Not a Prime Number, Try another One");
}

