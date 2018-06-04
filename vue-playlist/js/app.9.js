//实例化vue对象
var one =new Vue({
    el:"#vue-app-one",
    data:{
       title:'app one 的内容'
    },
    methods:{
       
    },
    computed:{
        greet:function(){
            return 'hello one';
        }
    }
});
var two =new Vue({
    el:"#vue-app-two",
    data:{
        title:'app two的内容'
    },
    methods:{
       changeTitle:function(){
           one.title="已经改名了";
       }
    },
    computed:{
        greet:function(){
            return 'hello two';
        }
    }
});
two.title='app twos title has been changed';