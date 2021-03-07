// var app = new Vue({
//     el:'#app',
//     methods:{
//         addItem:function(event){
//              alert();
//         }
//     }
// })


/* 算出プロパティーについて */
// var app = new Vue({
//     el:'#app',
//     data:{
//         message: "hello world"
//     },
//     computed:{
//         reversedMessage:  function(){
//             return this.message.split('').reverse().join('')
//         }
//     },
//     methods:{
//         reversedMessageMethod : function(){
//             return this.message.split('').reverse().join('')
//         }
//     }
// })


/* 算出プロパティ-とメソッドの比較について */


// var app = new Vue({
//     el:'#app',
//     data:{
//         basePrice :100
//     },
//     computed:{
//         taxIncludedPrice:{
//              get: function(){
//                  return parseInt(this.basePrice *1.08)
//              },
//              set:function(taxIncludedPrice){
//                  this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
//              }
//         }
//     }
// })



// var app = new Vue({
//     el: "#app",
//     computed:{
//         computedNumber: function(){
//             return Math.random()
//         }
//     },
//     methods:{
//         methodsNumber: function(){
//             return Math.random()
//         }
//     }
// })



/* 条件付きレンダリング */

var app = new Vue({
    el:'#app',
    data: {
     toggle:true
}
})

