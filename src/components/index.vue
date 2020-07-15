<template>
 <div>

    <div class="layui-layout layui-layout-admin">
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
            <li class="layui-nav-item">
                <a href="javascript:;">
                <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
                贤心
                </a>
                <dl class="layui-nav-child">
                <dd><a href="">基本资料</a></dd>
                <dd><a href="">安全设置</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item"><a href="">Logout</a></li>
            </ul>
        </div>
    
        <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
            <ul class="layui-nav layui-nav-tree"  lay-filter="test">
                <li class="layui-nav-item layui-nav-itemed">
                <a class="" href="javascript:;"> <span style="margin-left:-10px;"><i class="layui-icon" >&#xe665;</i>&nbsp;</span>工单系统 </a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;" @click="chick_url('/work_order')">工单类型</a></dd>
                    <dd><a href="javascript:;">新建工单类型</a></dd>
                    <dd><a href="javascript:;">工单工作台</a></dd>
                </dl>
                </li>
                <li class="layui-nav-item"><a href="javascript:;" @click="chick_url('/add_order')">新建工单</a></li>
            </ul>
            </div>
        </div>
    
        <div class="layui-body">
            <!-- 内容主体区域 -->
            <div style="padding: 15px;">
                <div class="test">
		            <iframe :src="frame_src" frameborder="0" width="1615px"  height="808px"></iframe>
               </div>
	        </div>
        </div>
        
        <div class="layui-footer">
            <!-- 底部固定区域 -->
            © layui.com - 底部固定区域
        </div>
    </div>

 </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      frame_src:''
    }
  },
  mounted(){
    //  使用layui
    layui.use(['element','form'], function(){
        var element = layui.element
        var form = layui.form;
    })
  },
  methods:{
    chick_url(url){
        this.frame_src = url

    },
  }
}
</script>
<style>
.layui-header{
    margin-top: -60px;
}

/* html { overflow-x:hidden; } */
</style>

