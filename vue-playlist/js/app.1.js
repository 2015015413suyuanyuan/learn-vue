//实例化vue对象
new Vue({
    el:"#canvas",
    data:{
       age:30,
       x:0,
       y:0
    },
    methods:{
        jia:function(inc){
            this.age+=inc;
        },
        jian:function(inc){
            this.age-=inc;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/