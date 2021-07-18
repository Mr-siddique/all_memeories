import React,{useEffect,useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Card';
import {getPosts} from './actions/posts';
import {useDispatch,useSelector} from 'react-redux';
const App=()=>{
    const [currentId,setCurrentId]=useState(null);
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    const posts = useSelector(state=>state.posts);
   return (
       <div className='container'>
        <Header/>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
        <div className='mainCardContainer'>
        {
            posts.map(post=><Card post={post} setCurrentId={setCurrentId}/>)
        }
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
        </div> 
       </div>
   )
}
export default App;