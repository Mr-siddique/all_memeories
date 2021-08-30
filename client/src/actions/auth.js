import * as api from '../api';
export const signIn=(user,history) =>async(dispatch)=>{
    try{
        const {data}=await api.signIn(user);
        dispatch({type:'AUTH',data});
        history.push('/');
    }catch(err){
        console.log(err);
    }
}
export const signUp=(user,history)=>async(dispatch)=>{
    try{
        const {data}=await api.signUp(user);
        dispatch({type:'AUTH',data});
        history.push('/');
    }catch(err){
        console.log(err)
    }
}