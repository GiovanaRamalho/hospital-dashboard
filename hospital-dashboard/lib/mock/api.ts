import { procedures } from "./procedures";

export async function getProcedures(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(procedures);
        }, 800)
    })
}