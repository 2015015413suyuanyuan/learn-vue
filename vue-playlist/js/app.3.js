//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        
    },
    methods:{
       logname:function(){
           console.log("你正在输入名字")
       },
       logage:function(){
           console.log('你正在输入年龄');
       }
    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/