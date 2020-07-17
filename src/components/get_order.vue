<template>
  <div>
      <div class='form_div'>

        <div class="layui-form" style="margin-top:20px;">
            <div  style="width:500px;" >
                <div>
                    <div class="layui-form-item" >
                    <label class="layui-form-label">待领取的工单：</label>
                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                            <input type="checkbox" name="about_me" title="与我有关"  value="1" lay-skin="primary" v-model="about_me"> 
                        </div>
                    </div>
                </div>
                <div >
                    <div class="layui-form-item">
                        <label class="layui-form-label">接收部门：</label>
                        <div class="layui-input-block">
                            <select name="city" id="accept_department" lay-verify="required"  lay-search>
                                <option value="">请选择</option>
                                <option value="0">产品研发部</option>
                                <option value="1">Co部门</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">发起部门：</label>
                        <div class="layui-input-block">
                            <select name="city" id="send_department" lay-verify="required"  lay-search>
                                <option value="">请选择</option>
                                <option value="0">产品研发部</option>
                                <option value="1">Co部门</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">优先级：</label>
                        <div class="layui-input-block">
                            <select name="city" id="priority" lay-verify="required"  lay-search>
                                <option value="">请选择</option>
                                <option value="普通">普通</option>
                                <option value="低">低</option>
                                <option value="立即解决">立即解决</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="float:left;margin-left:200px">
                        <button type="button" class="layui-btn layui-btn-normal" lay-submit @click="search" >&emsp;&emsp;<b>搜索</b>&emsp;&emsp;</button>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <div>
                    <table  border="1" cellpadding=30>
                        <tr style="height:60px">
                            <td>全选</td>
                            <td>标题</td>
                            <td>接受部门</td>
                            <td>创建时间</td>
                            <td>操作</td>
                        </tr>
                        <tr style="height:100px;">
                            <td>
                                <div style="width:80px;margin: 0 auto;">
                                    <div class="layui-form-item" >
                                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                                            <input type="checkbox" name="more_check" value="wqert" lay-skin="primary"> 
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>
                                <p><a href="">领取</a></p>
                                <br>
                                <p><a href="">指派</a></p>
                            </td>
                        </tr>


                    </table>
                </div>
                <p><button @click="test">test</button></p>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
import {config2,get_request} from '../config.js'
export default {
    data(){
        return{
            about_me:'',
            accept_department:'',
            send_department:'',
            priority:'',
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
        // 获取单选框的值
         getCheckBoxValue(checkName){
            var obj = document.getElementsByName(checkName);    
            var checklist=[]
            for(let i=0;i<obj.length;i++){ 
                if(obj[i].checked){
                    checklist.push(obj[i].value)    
                 } 
             }         
             return checklist;    
         } ,
        getSelectValue(selectid){
            var myselect=document.getElementById(selectid);
            var index=myselect.selectedIndex ; 
            return myselect.options[index].value
         },
        search(){
            var about_me=parseInt(this.getCheckBoxValue('about_me')[0])
            if(about_me){
                this.about_me=about_me
            }else{
                this.about_me = 0
            }
            this.accept_department=this.getSelectValue('accept_department')
            this.send_department=this.getSelectValue('send_department')
            this.priority=this.getSelectValue('priority')
            if(this.accept_department!=''&& this.send_department!='' && this.priority!=''){
                var data={
                    about_me:this.about_me,
                    accept_department:this.accept_department,
                    send_department:this.send_department,
                    priority:this.priority
                }
                console.log(data)
            }else{
                return false 
            }
        },
        test(){
            console.log(1234)
            var res=get_request('/register/',{'123':123})
            console.log(res)
        }
    }
}
</script>

<style>
.form_div{
    margin-top: -20px;
}
table{
    width: 1400px;
    margin-left: 30px;
    margin-top: 20px;
}
table td{
    width: 100px;
}
</style>