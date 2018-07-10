var app = new Vue({
  el: "#app",
  data: {
    books: [{
      name: 'javascript 权威指南',
      author: 'chenbang'
    }, {
      name: 'javascript 高级编程',
      author: 'chenyun'
    }, {
      name: 'vue js实战',
      author: 'chenchao'
    }, ]
  },
  methods: {

  },
  computed: {
    filterBooks: function() {
      return this.books.filter(function(book) {
        return book.name.match(/javascript/)
      })
    }
  },
  mounted: function() {

  },
  beforeDestroy() {

  }
})

// Vue.set(app.books, 1, {
//   name: 'spring boot 实战',
//   author: 'chenjia'
// })

// app.books.splice(1);


//无效果
app.books[1] = {
  name: 'spring boot 实战',
  author: 'chenjia'
}
