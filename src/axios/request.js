import axios from "axios";
// 导入axios的对象
export  const request = (config,success,error) =>{
    //初始化axios的配置
    const  initialize = axios.create({
        baseURL: 'http://localhost:8080/login',
        timeout: 500,
        method: 'POST'
    });

    // 回调成功的数据和错误的信息
    initialize(config).then(success = () => success(success)).catch( error => error(error))

}