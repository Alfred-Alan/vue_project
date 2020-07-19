<template>
  <div>
      <h1>注册</h1>
      <div class="layui-form" >
        <div class="mar">
            <div class="layui-form-item">
                <label class="layui-form-label">用户名</label>
                <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" style="width:200px" v-model="username">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" style="width:200px" v-model="password">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">确认密码</label>
                <div class="layui-input-inline">
                <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" style="width:200px" v-model="password1">
                </div>
            </div>
        </div>
        <div class="mat">
            <div class="layui-form-item">
                <!-- <div class="layui-input-block"> -->
                    <button class="layui-btn" lay-submit lay-filter="formDemo" @click="on_click">注册</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                <!-- </div> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {config2, config} from "../config.js"
export default {
    data(){
        return{
            username:'',
            password:'',
            password1:'',
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

        // 账号注册
        on_click:function(){
            if(this.password==this.password1){
                console.log(this.username)
                console.log(this.password)
                console.log(this.password1)

                this.axios({
                    url:config2.baseurl+"/register/",
                    method:'GET',
                    params:{'username':this.username,'password':this.password}
                }).then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        alert('添加成功')
                    }else{
                        alert('添加失败')
                    }
                })
            }else{
                layer.msg('密码不一致');
            }
        }
    },
}
</script>

<style>
.mar {
    margin: 0 auto;
    width: 400px;
};
.mat{
    margin-left: -100px ;
    width: 300px;
}
</style>