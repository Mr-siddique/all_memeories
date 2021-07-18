import * as api from '../api';
export const getPosts=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        // console.log(data);
        dispatch({type:'FETCH_ALL',payload:data});
    }catch(error){
        console.log(error.message);
    }
}
export const createPost=(newPost)=>async(dispatch)=>{
    try{
      const {data}=await api.createPost(newPost);
    //   console.log(data); 
      dispatch({type:'CREATE_POST',payload:data});
    }catch(error){
        console.log(error.message);
    }
}
export const updatePost = (id,updatedPost)=>async(dispatch)=>{
    try{
      const {data}=await api.updatePost(id,updatedPost);
      console.log(data);
      dispatch({type:'UPDATE_POST',payload:data});
    }catch(error){
        console.log(error.message);
    }
}
export const deletePost=(id)=>async(dispatch)=>{
     try{
        await api.deletePost(id);
        dispatch({type:'DELETE_POST',payload:id});
     }catch(error){
        console.log(error.message);
     }
}