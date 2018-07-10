var app = new Vue({
  el: "#app",
  data: {
    message: '',
    selected: 'html',
    options: [{
      text: 'HTML',
      value: 'html'
    }, {
      text: 'javaScript',
      value: 'javascript'
    }, {
      text: 'CSS',
      value: 'css'
    }, ]
  },
  methods: {
    hadndleInput: function(e) {
      this.message = e.target.value;
    }
  },
  computed: {

  },
  mounted: function() {

  },
  beforeDestroy() {

  }
})
