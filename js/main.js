'use strict'


function divide(a, b){
    console.log(a/b);
}

divide(10,2);



let i = 0;
do{
    i += 10;
    console.log(i);
}while(i < 150);



function square(number) {
    console.log(number * number);
  }

  square(10); 



  function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }


  factorial(2);


