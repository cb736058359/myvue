var bus = new Vue();
Vue.component('my-component', {
  template: '\
  <div>\
  <button @click="increase">+1</button>\
  <button @click="reduce">-1</button>\
  </div>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    increase: function() {
      this.counter++;
      this.$emit('increase', this.counter)
    },
    reduce: function() {
      this.counter--;
      this.$emit('reduce', this.counter)
    }
  }
})
Vue.component('props-component', {
  template: '<div>{{message.length}}</div>',
  props: ['message']
})

Vue.component('single-component', {
  template: '<div>{{count}}</div>',
  props: ['initCount'],
  data: function() {
    return {
      count: this.initCount
    }
  }
})

Vue.component('model-component', {
  props: ['value'],
  template: '<input :value="value"  @input="updateValue"></input>',
  methods: {
    updateValue: function(event) {
      this.$emit('input', event.target.value);
    }
  }
})

Vue.component('component-a', {
  props: ['value'],
  template: '<input :value="value" @input="updateValue">+1</input>',
  methods: {
    updateValue: function(event) {
      bus.$emit('on-message', event.target.value);
    }
  }
})

var app = new Vue({
  el: "#app",
  data: {
    parentMessage: '',
    total: 0,
    message: ''
  },
  methods: {
    getTotal: function(total) {
      this.total = total;
    },
    reduceTotal: function() {
      this.total--;
    }
  },
  computed: {

  },

  mounted: function() {
    var _this = this;
    bus.$on('on-message', function(msg) {
      _this.message = msg;
    })
  },
  beforeDestroy() {

  }
})
