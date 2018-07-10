var app = new Vue({
  el: "#vue-app",
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() { // nodejs
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {

  }
})

// nodejs
// var http = require


// var app = new Vue({
//   el: '#vue-app',
//   data: {
//     website: 'https://www.baidu.com',
//     name: '',
//     age: 24,
//     a: 0,
//     b: 0,
//     websitetag: '<a href="https://www.baidu.com">baidu</a>',
//     x: 0,
//     y: 0,
//     available: false,
//     nearby: false,
//     error: false,
//     success: false,
//     characters: [
//       'A', 'B', 'C', 'D'
//     ],
//     chens: [{
//       'name': 'chenbang',
//       age: 25
//     }, {
//       'name': 'chenyun',
//       age: 26
//     }, {
//       'name': 'chenchao',
//       age: 24
//     }]
//   },
//   methods: {
//     add: function(inc) {
//       this.age += inc;
//     },
//     substract: function(dec) {
//       this.age -= dec;
//     },
//     updateXY: function(Event) {
//       // console.log(Event)
//       this.x = Event.offsetX;
//       this.y = Event.offsetY;
//     },
//     click: function() {
//       alert('you can click!!');
//     },
//     keyupName: function() {
//       console.log("output your name");
//     },
//     keyupAge: function() {
//       console.log("output your age");
//     },
//     addToA: function() {
//       console.log("addToA()");
//       return this.age + this.a;
//     },
//     addToB: function() {
//       console.log("addToB()");
//       return this.age + this.b;
//     }
//   },
//   computed: {
//     compClasses: function() {
//       return {
//         available: this.available,
//         nearby: this.nearby
//       }
//     }
//   }
//
// })

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello vue!'
//   }
// })
//
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: "页面加载域" + new Date().toLocaleString()
//   }
// })
//
// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })
//
// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [{
//       text: "java"
//     }, {
//       text: "PHP"
//     }, {
//       text: "Python"
//     }]
//   }
// })
//
// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Hello vue!'
//   },
//   methods: {
//     clickButton: function() {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// Vue.component('todo-item', {
//   template: '<li>这是个代办项</li>'
// })
