<template>
 <div>

    <div class="layui-layout layui-layout-admin">
      <!-- 监听子组件发送的信息 -->
        <myheader v-on:frame_change="chick_url"></myheader>
    
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
                <li class="layui-nav-item"><a href="javascript:;" @click="chick_url('/get_order')">领取工单</a></li>
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
import myheader from './header.vue'
import {config2,set_frame_src} from '../config.js'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      frame_src:'',
    }
  },
    //注册组件标签
    components:{
      'myheader':myheader,
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
      this.frame_src = config2.frame_src+url
        // var resurl=set_frame_src(url)
        // this.frame_src = resurl
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

