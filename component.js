var vmodel = new Vue({
  el:'#vmodel',
  data:{
    message:'',
    checked:false,
    checkedNames:[],
    radio:'',
    picked:'a',
    toggle:false,
    selected:'chenbang',
    selected01:'123',
    msg:'',
  },
})
console.log(vmodel.selected01);

var example = new Vue({
  el:'#example',
  data:{
    count:0
  }
})

Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})


var obj ={
  foo:'bar'
}

// Object.freeze(obj)

var app1=new Vue({
  created:function(){
    console.log(this.foo);
  },
  el:'#app1',
  data: obj,
})

console.log(app1.$data===obj);
