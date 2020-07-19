<template>
  <div>
        <div class='form_div'>

            <div class="title">
                
                <h1>&emsp;&emsp;<b>新建工单</b></h1>
            </div>

            <div class="layui-form" style="margin-top:20px;">
                <div style="width:800px;">
                <div class="layui-form-item">
                    <label class="layui-form-label">工单标题：</label>
                    <div class="layui-input-block">
                        <input type="text" name="title" required  lay-verify="required" placeholder="请输入工单名称" autocomplete="off" class="layui-input" v-model="order_name">
                    </div>
                </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">工单类型：</label>
                        <div class="layui-input-block">
                            <select name="order_type" id="order_type" lay-verify="required"  lay-search>
                                <option value="">请选择</option>
                                <option value="0">北京</option>
                                <option value="1">上海</option>
                                <option value="2">广州</option>
                                <option value="3">深圳</option>
                                <option value="4">杭州</option>
                            </select>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">接收部门：</label>
                        <div class="layui-input-block">
                            <select name="city" id="department" lay-verify="required"  lay-search>
                                <option value="">请选择</option>
                                <option value="0">产品研发部</option>
                                <option value="1">Co部门</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br>
                <hr>

                <div>
                    <div class="layui-form-item" >
                        <label class="layui-form-label">优先级：</label>
                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                            <input type="radio" name="priority" value="普通" title="普通" checked>
                            <input type="radio" name="priority" value="低" title="低">
                            <input type="radio" name="priority" value="立即解决" title="立即解决">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">使用设备：</label>
                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                            <input  type="radio" name="use_model" value="iPhone" title="iPhone" checked>
                            <input  type="radio" name="use_model" value="Android" title="Android">
                            <input  type="radio" name="use_model" value="iPad" title="iPad">
                            <input  type="radio" name="use_model" value="Windows" title="Windows">
                            <input  type="radio" name="use_model" value="XP" title="XP">
                            <input  type="radio" name="use_model" value="MAC" title="MAC">
                        </div> 
                    </div>
                    <div class="layui-form-item" >
                        <label class="layui-form-label">使用软件：</label>
                        <div class="layui-input-block"  style="float:left;margin-left:10px">
                            <input type="radio" name="application" value="客户端" title="客户端" checked>
                            <input type="radio" name="application" value="APP" title="APP">
                        </div>
                    </div>
                </div>

                <div style="width:500px;">

                    <div style="margin-left:0px;">

                        <span>&nbsp;上传多张图片：</span>
                        <van-uploader multiple v-model="fileList"  :max-count="4" />
                    </div>
                </div>
                <div style="width:800px;">
                    <div class="layui-form-item layui-form-text">
                        <label class="layui-form-label">工单详情:</label>
                        <div class="layui-input-block">
                        <textarea name="desc" placeholder="请输入内容" lay-verify="required" class="layui-textarea" v-model="order_info"></textarea>
                        </div>
                    </div>
                </div>
                <div style="width:800px;">
                    <button type="button" class="layui-btn" lay-submit  @click="add" >
                        <i class="layui-icon">&#xe608;</i> 添加
                    </button>
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
            order_name:'',
            order_type:'',
            department:'',
            priority:'',
            use_model:'',
            application:'',
            order_info:'',
            fileList: [ ],
            img_names:[],
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
        onOversize(file) {
            console.log(file);
            alert('文件大小不能超过 500kb');
        },
        getSelectValue(selectid){
            var myselect=document.getElementById(selectid);
            var index=myselect.selectedIndex ; 
            return myselect.options[index].value
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
        make_blob(base64str){
            //将base64 的数据弄到form表单中
            // 将base64 的代码转化为二进制
            let bytes = window.atob(base64str.split(',')[1]);
            let ab = new ArrayBuffer(bytes.length);
            let ia = new Int8Array(ab);
            for (let i = 0; i < bytes.length; ++ i) {
                ia[i] = bytes.charCodeAt(i);
            }
            let blob = new Blob([ia], {type: 'image/jpeg'});
            return blob
        },
        add(){
            this.department = this.getSelectValue('department')
            this.order_type = this.getSelectValue('order_type')
            this.priority = this.getRadioBoxValue('priority')
            this.use_model = this.getRadioBoxValue('use_model')
            this.application = this.getRadioBoxValue('application')
            
            // 判断字段是否为空 
            if(this.order_name!="" && this.order_type!=""&&this.department!=""&&this.priority!=""&&this.use_model!=""&& this.application!=""&& this.order_info!=""){
                // var data={
                //     order_name: this.order_name,
                //     order_type: this.order_type,
                //     department: this.department,
                //     priority: this.priority,
                //     use_model: this.use_model,
                //     application: this.application,
                //     order_info: this.order_info,
                //     fileList: this.fileList,
                // }
                var formdata = new FormData()
                formdata.append('order_name',this.order_name)
                formdata.append('order_type',this.order_type)
                formdata.append('department',this.department)
                formdata.append('priority',this.priority)
                formdata.append('use_model',this.use_model)
                formdata.append('application',this.application)
                formdata.append('order_info',this.order_info)

                // 判断是否有图片
                if(this.fileList){
                    for(let i =0;i<this.fileList.length;i++){
                        // console.log(this.fileList[i].file.name)
                        // 名字列表添加进表单
                        //  formdata.append('img_names',this.fileList[i].file.name)
                        // 添加进表单
                        formdata.append('file',this.make_blob(this.fileList[i].content),this.fileList[i].file.name)
                    }
                }
                

                const config = {
                    headers: { 'Content-Type': 'multipart/form-data' }
                } 
                axios.post(config2.baseurl+'/add_order',formdata,config).then(res=>{
                    console.log(res.data)
                })
            }else{
                alert(123)
                return false 
            }

        },
    },
    created(){

    }
}
</script>

<style>
.form_div{
    margin-top: -20px;
}
.title{
    text-align: left;
    border-bottom: 1px #E0E0E0 solid;
    border-bottom-width: 1.5px    ;
}

hr{
    width: 1500px;
    margin-left: 60px;;
}
</style>