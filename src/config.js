//常量的定义

export const config = {
    port:'5000',
    host:'127.0.0.1',
    // baseurl:'http://'+config.host+":"+config.port,
    mystr:'123',
    secret:'201528',
    // request_url:'http://'+host+":"+port,
  }
  export const config2= {
    baseurl:'http://'+config.host+":"+config.port,

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