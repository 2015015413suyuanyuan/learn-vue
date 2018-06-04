//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:'suyy',
        job:"前端开发",
        website:'www.baidu.com',
        websiteTag:"<a href='www.baidu.com'>the new step</a>",
    },
    methods:{
        greet:function(time){
            return 'good  '+time+"  " +this.name+'!';
        }
    }
});
/*
*el:element 需要获取的元素，一定是HTML中的根容器元素
*data:用于数据的存储
*methods:用于存储各种方法
*data-bingding:给属性绑定对应的值
*/