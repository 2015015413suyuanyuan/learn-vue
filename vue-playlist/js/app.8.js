//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
       characters:['marry','luffy','yoshi'],
       users:[
           {name:'henry',age:30},
           {name:'buck',age:20},
           {name:'emily',age:19}
       ]
    },
    methods:{
        
    },
    computed:{

    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/