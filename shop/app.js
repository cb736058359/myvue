var app = new Vue({
  el: "#app",
  data: {
    list: [{
      id: 1,
      name: 'iphone7',
      price: 6188,
      count: 1
    }, {
      id: 2,
      name: 'ipad pro',
      price: 5188,
      count: 1
    }, {
      id: 3,
      name: 'MacBook pro',
      price: 188888,
      count: 1
    }]
  },
  methods: {
    add: function(index) {
      this.list[index].count++;
    },
    reduce: function(index) {
      if (this.list[index].count === 1) return;
      this.list[index].count--;
    },
    remove: function(index) {
      //数组中去除一个元素
      this.list.splice(index, 1);
    }
  },
  computed: {
    totalPrice: function() {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i];
        total += item.price * item.count
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
    }
  }
})
