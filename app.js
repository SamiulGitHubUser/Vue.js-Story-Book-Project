window.onload = function () {
    var app = new Vue({
        el: '#vue-app',
        data: {
          message: 'Welcome to Vue.js Story Book Project!',
          name: 'SAM',
          website: 'https://www.w3schools.com/',
          websiteTag: '<a href="https://www.w3schools.com/">Click Here</a> ',
          age: 25,
          x: 0,
          y: 0
        },
    
        methods:{
            greeting: function(time){
                return "Good "+ time + ' '+ this.name
            },
            add:function(inc){
                this.age +=inc
            },
            subtract:function(dec){
                this.age -= dec
            },
            updateXY:function(event){
                //console.log(event)
                this.x = event.offsetX
                this.y = event.offsetY
            },
            click:function(){
                alert("It will prevent to go to 'https://www.w3schools.com/' ")
            },
            logName:function(){
                console.log('you entered your name.')
            },
            logAge:function(){
                console.log('you entered your age.')
            },
            

        }
      }) 
}