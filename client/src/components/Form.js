import React,{useState,useEffect}from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from './../actions/posts'
import  FileBase  from "react-file-base64";
const Form=({currentId,setCurrentId})=>{
  const dispatch=useDispatch();
  const [post,setPost]=useState({
    title:'',
    message:'',
    tags:'',
    file:''
  })
  const user=JSON.parse(localStorage.getItem('profile'));
  const Post=useSelector(state=>currentId?state.posts.find(p=>p._id===currentId):null);
  // console.log(Post);
  useEffect(() => {
    if(Post)
    setPost(Post);
  },[Post]);
  const clearFormData=()=>{
    setCurrentId(null);
    setPost({
      title:'',
      message:'',
      tags:'',
      file:''
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(currentId)
    dispatch(updatePost(currentId,{...post,name:user?.result?.name}));
    else
    dispatch(createPost({...post,name:user?.result?.name}));
    clearFormData();
  }
  if(!user?.result?.name){
    return (<div className="show">
      <h2> You Need To Login To Create A Memory.</h2>
    </div>)
  }
    return (
      <div className="fromContainer">
          <form onSubmit={handleSubmit}>
          {/* <input type="text" className="text" placeholder="Creator" name="creator" value={post.creator} onChange={e=>setPost({...post,creator:e.target.value})}/>  */}
          <input type="text" className="text" placeholder="Title" name="title" value={post.title} onChange={e=>setPost({...post ,title:e.target.value})}/>
          <input type="text" className="text" placeholder="Message" name="message" value={post.message} onChange={e=>setPost({...post ,message:e.target.value})}/>
          <input type="text" className="text" placeholder="Tags" name="tags" value={post.tags} onChange={e=>setPost({...post ,tags:e.target.value.split(',')})}/>
          <FileBase className="file" type="file" name="eventImage" multiple={false} 
          onDone={({base64})=>setPost({...post, file:base64})}/>
          <button className="submit" type="submit">Submit</button>
          <button className="clear" type="reset" onClick={clearFormData}>Clear</button>
        </form>
      </div>
    )
}
export default Form;