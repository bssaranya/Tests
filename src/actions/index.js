import {setData,getData} from '../services'
import { decrpt, encrypt } from '../utils/passwordHashing'

export const setDataToJson = (data)=>async(dispatch)=>{
    const encryptPassword = encrypt(data.password)
    let detail = { ...data,password:encryptPassword}
const query = await setData('signUp/',detail)
}

export const login = (data)=>async()=>{
    let uname = 'a@a.com';
    let pswd = 'qwerty'
    const {data} = await getData('signUp/');
    let user = data.find(item=>item.email === uname);
    // console.log(user);
    let decrypt = decrpt(user.password)

    if(uname === user.email && pswd === decrypt){
        alert('Sucejhk')
        localStorage.setItem('login',uname)
        // dispatc
        // history.
    }
    else{
        alert('WRONG')
    }

}
export const getDataFromJson = ()=>async(dispatch)=>{
    const {data} = await getData('signUp/');
    dispatch({
        type:'GET_DATA',
        payload:data
    })
}