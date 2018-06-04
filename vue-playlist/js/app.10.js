// 模板里面有且只有一个根标签
//会发生变量共享，这样所有的都会改为butt
// var data ={
//     name:'butt'
// }
Vue.component('greeting',{
    template:`
    <p>hello world,{{name}}
    <button v-on:click="changeName">修改名称</button>
    </p>
    `,
    data:function(){
        return {
            name:"marry"
        }
    },
    methods:{
        changeName:function(){
            this.name = 'henry';
        }
    }
});
var one = new Vue({
    el:'#vue-app-one',
});
var two = new Vue({
    el:'#vue-app-two',
});