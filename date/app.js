//在月前补零
var padDate = function(value) {
  return value < 10 ? '0' + value : value
}

var app = new Vue({
  el: "#app",
  data: {
    date: new Date(),
    text: '123,456'
  },
  methods: {

  },
  computed: {
    reversedText: function() {
      return this.text.split(',').reverse().join(',')
    }
  },
  filters: {
    formate: function(value) {
      var date = new Date(value);
      return date.getFullYear() + '-' + padDate(date.getMonth() + 1) +
        '-' + padDate(date.getDate()) + '  ' + padDate(date.getHours()) +
        ':' + padDate(date.getMinutes()) + ':' + padDate(date.getSeconds())
    }
  },
  mounted: function() {
    var _this = this; //声明只想vue的实例，确保一个实例
    _this.timer = setInterval(function() {
      _this.date = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
})
