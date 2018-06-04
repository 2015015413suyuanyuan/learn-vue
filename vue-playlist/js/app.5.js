//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
       a:1,
       b:2,
       age:20
    },
    //方法无论点击那个，上下两个方法都会执行，一旦一个被触发，两个方法都会被执行，DOM结构都会被执行，消耗性能
    // methods:{
    //     addToA:function(){
    //         return this.a+this.age
    //     },
    //     addToB:function(){
    //         return this.b+this.age
    //     }
    // },
    computed:{
        addToA:function(){
            console.log('adda');
            return this.a+this.age;
        },
        addToB:function(){
            console.log('addb');
            return this.b+this.age;
        }        
    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/