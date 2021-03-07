// var app = new Vue({
//     el:'#app',
//     methods:{
//         addItem:function(event){
//              alert();
//         }
//     }
// })


/* 算出プロパティーについて */
var app = new Vue({
    el:'#app',
    data:{
        message: "hello world"
    },
    computed:{
        reversedMessage:  function(){
            return this.message.split('').reverse().join('')
        }
    }
})