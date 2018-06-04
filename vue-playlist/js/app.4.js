//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:'suyy',
        age:'22',
        date:''
    },
    methods:{
        logname:function(){
            this.name=this.$refs.name.value;
        },
        logage:function(){
            this.age=this.$refs.age.value;
        }
    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/