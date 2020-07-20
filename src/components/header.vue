<template>
  <div>
        <div class="layui-header">
            <div class="layui-logo">AntDesign</div>
            <!-- 头部区域（可配合layui已有的水平导航） -->
            <ul class="layui-nav layui-layout-left">
            <li class="layui-nav-item"><a href="">控制台</a></li>
            <li class="layui-nav-item"><a href="">商品管理</a></li>
            <li class="layui-nav-item"><a href="">用户</a></li>
            <li class="layui-nav-item">
                <a href="javascript:;">其它系统</a>
                <dl class="layui-nav-child">
                <dd><a href="">邮件管理</a></dd>
                <dd><a href="">消息管理</a></dd>
                <dd><a href="">授权管理</a></dd>
                </dl>
            </li>
            </ul>
            <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item"  v-if="username" >
                <div>
                    <a href="javascript:;">
                        <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
                        贤心
                    </a>
                    <dl class="layui-nav-child">
                        <dd><a href="">基本资料</a></dd>
                        <dd><a href="">安全设置</a></dd>
                        <dd><a href="">Logout</a></dd>
                    </dl>
                </div>

            </li>
            <li class="layui-nav-item"  v-else >
                <div>
                    <a href="javascript:;" @click="chick_url('/login')">Login</a>
                </div>
            </li> 
            <li class="layui-nav-item" >
                <div>
                    <a href="javascript:;" @click="chick_url('/register')">Register</a>
                </div>
            </li>
            </ul>
        </div>
  </div>
</template>

<script>
import {config2,set_frame_src} from '../config.js'
export default {
    data(){
        return{
            username:sessionStorage.getItem('username'),
            frame_src:'',
        }
    },
    methods:{
        chick_url(url){
            // 子组件向父页面传递信息
            this.$emit('frame_change',url)
        }
    }
}
</script>

<style>
.layui-layout-right{
    margin-right: 10px;
}
</style>