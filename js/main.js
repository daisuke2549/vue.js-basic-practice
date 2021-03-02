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


const downtown ={
    name : 'ダウンタウン',
    boke : 'm松本ひとし',
    tsukkomi : '浜田'
}  


const chidori ={
  name : 'ダウンタウン',
  boke : 'm松本ひとし',
  tsukkomi : '浜田'
}  


const introduce = (combi) => {
  console.log('コンビ名は${combi.name}です。')
}

introduce(downtown);
introduce(chidori);



let icecream = "lemon";
if (icecream === "chocolate"){
  alert('やった、チョコレートアイス大好き！');
} else {
  alert('あれれ、でもチョコレートは私のお気に入り......');
}



const score = 60;
if(score > 70){
  console.log("good");
}else{
  console.log("bad");
}


let shopping = ['milk', 'rice', 'apple', 'banana', 'grape'];
shopping[0];


let money = 2000;

console.log(money*2);



let x = 0;

while( x < 10000){
  console.log('現在の値は${x}です');
  x++;
}