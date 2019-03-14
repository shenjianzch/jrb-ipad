import axios from './fetch';

export default function (url,params={},method='get'){
    return new Promise((resolve,reject)=>{
            if(method.toLocaleLowerCase()=='get'){
                params={
                    params:params
                }
            }
            axios[method](url,params).then(res=>{
                resolve(res.data)
            }).catch(error=>{
                reject(error)
            })
    })
}