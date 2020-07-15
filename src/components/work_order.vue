<template>
  <div>
        <div class='form_div'>
             <div class="layui-form">
                <div>
                    <div class="layui-form-item" style="float:left">
                        <label class="layui-form-label">工单类型：</label>
                        <div class="layui-input-block"> 
                            <input type="text" name="title" required  lay-verify="required" placeholder="请输入工单类型名称" autocomplete="off" class="layui-input" v-model="order_type_name" >
                        </div>
                    </div>
                    <div class='new_order_btn'>
                        <a href="/add_order" class="layui-btn layui-btn-normal" style="float:left；"><b>新建工单类型</b></a>
                    </div>
                </div>
                <div style="width:510px;">
                    <div class="layui-form-item">
                        <label class="layui-form-label">接收部门：</label>
                        <div class="layui-input-block">
                            <select name="department" id="department"  lay-verify="required" lay-search>
                                <option value="">请选择</option>
                                <option value="产品研发部">产品研发部</option>
                                <option value="Co部门">Co部门</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="layui-form-item" >
                        <label class="layui-form-label">工单类型状态：</label>
                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                            <input type="radio" name="order_type" v-model="order_type" value="不限" title="不限" checked>
                            <input type="radio" name="order_type" v-model="order_type" value="启用" title="启用">
                            <input type="radio" name="order_type" v-model="order_type" value="禁用" title="禁用">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">工单类型对象：</label>
                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                            <input v-model="order_type_obj" type="radio" name="order_type_obj" value="不限" title="不限" checked>
                            <input v-model="order_type_obj" type="radio" name="order_type_obj" value="面向家长" title="面向家长">
                            <input v-model="order_type_obj" type="radio" name="order_type_obj" value="面向老师" title="面向老师">
                        </div>
                    </div> 
                </div>
                <div>
                    <div style="float:left;margin-left:30px">
                        <button type="button" class="layui-btn layui-btn-normal" lay-submit @click="search" >&emsp;&emsp;<b>搜索</b>&emsp;&emsp;</button>
                    </div>
                </div>
                    <br>
                    <br>
                    <br>
                <div>
                    <table  border="1" cellpadding=30>
                        <tr style="height:60px">
                            <td>工单类型ID</td>
                            <td>状态</td>
                            <td>工单类型名称</td>
                            <td>接受部门</td>
                            <td>配置字段</td>
                            <td>创建时间</td>
                            <td>最后修改时间</td>
                            <td>最后操作人</td>
                            <td>操作</td>
                        </tr>
                        <tr style="height:100px;">
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>
                                <p><a href="">禁用</a></p>
                                <br>
                                <p><a href="">编辑</a></p>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>
	</div>
</div>


</template>


<script>
import axios from 'axios'
import {config2} from '../config.js'
export default {
    data(){
        return{
            order_type_name:'',
            order_type:'不限',
            order_type_obj:'不限',
            department:'',
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
        select_depart(val){
            console.log(val)
        },
        // 获取单选框的值
         getRadioBoxValue(radioName){
            var obj = document.getElementsByName(radioName);        
            for(let i=0;i<obj.length;i++){ 
                  if(obj[i].checked){ 
                    return obj[i].value; 
                  } 
              }         
             return "undefined";    
         } ,
         getSelectValue(selectid){
            var myselect=document.getElementById(selectid);
            var index=myselect.selectedIndex ; 
            return myselect.options[index].value
         },
        search(){
            this.order_type= this.getRadioBoxValue("order_type");   
            this.order_type_obj= this.getRadioBoxValue("order_type_obj");   
            this.department = this.getSelectValue('department')
            // 判断非空 
            if (this.order_type_name!='' && this.department!='' && this.order_type!='' && this.order_type_obj!=''){
                var data={
                    order_type_name:this.order_type_name,
                    department:this.department,
                    order_type:this.order_type,
                    order_type_obj:this.order_type_obj
                }
                 console.log(data,config2['baseurl'])
            }else{
                return false
            }
        },

   
    },
    

}

</script>

<style>
.layui-input{
    width: 400px;
}
.form_div{
    margin-top: -20px;
}
.new_order_btn{
    position: fixed;
    right: 50px;
}
/* td{
    width: 100px;
} */
table{
    width: 1400px;
    margin-left: 30px;
    margin-top: 20px;
}
table td{
    width: 100px;
}
</style>
