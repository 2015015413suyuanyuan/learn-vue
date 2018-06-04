//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
      changeColor:false,
      changeLength:false
    },
    methods:{
      
    },
    computed:{
        comClasses:function(){
            return {
                changeColor:this.changeColor,
                changeLength:this.changeLength
            }
        }
    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/