//常量的定义

export const config = {
    port:'5000',
    // host:'127.0.0.1',
    host:'0.0.0.0',
    // baseurl:'http://'+config.host+":"+config.port,
    mystr:'123',
    secret:'201528',
    // 后台请求ip 
    ip:'111.231.193.96',
    // request_url:'http://'+host+":"+port,
    // 前端本地ip
    webip:'139.155.72.14',
  }
  export const config2= {
    baseurl:'http://'+config.ip+":80",
    frame_src:'http://'+config.webip+":3000",

  }
  export function set_frame_src(url){
    config.frame_src = url
    return config.frame_src
    
  }
  //函数的定义
  export function formatXml(text) {
  　　return text
  }
  import jwt from 'jwt-simple'
  export function jwt_encode(dict) {
    　　return jwt.encode(dict,config['secret'])
    }
  
  import axios from 'axios'
  export function get_request(route='/',params={}){
      axios.get(config2.baseurl+route,{
        params:params
      }).then(res=>{
        console.log(res.data)
        return res.data
      })
  }