<template>
  <div>
    <h1>登陆</h1>
    <div class="layui-form">
      <div class="mar">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="username" required lay-verify="required" placeholder="请输入用户名" autocomplete="off"
                   class="layui-input" style="width:200px" v-model="username">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
                   class="layui-input" style="width:200px" v-model="password">
          </div>
        </div>
      </div>
      <div class="mat">
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo" @click="on_click">登陆</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {config2} from '../config'

  export default {
    data() {
      return {
        username: "",
        password: "",
      }
    },
    mounted() {
      //  使用layui
      layui.use(['element', 'form'], function () {
        var element = layui.element
        var form = layui.form;
      })
    },
    methods: {
      on_click: function () {
        console.log(this.username);
        console.log(this.password);
        var fromdata = new FormData();
        fromdata.append('username', this.username);
        fromdata.append('password', this.password);
        this.axios.post(config2.baseurl + '/login/', fromdata).then((result) => {
          console.log(result.data.code);
          localStorage.setItem('username', result.data.username);
          localStorage.setItem('role', result.data.role);
        })
      }
    },
  }
</script>

<style>

  .mar {
    margin: 0 auto;
    width: 400px;
  }

  .mat {
    margin-left: -100px;
    width: 300px;
  }
</style>
