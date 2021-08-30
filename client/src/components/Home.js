import React, { useEffect, useState } from 'react';
import Form from './Form';
import Header from './Header';
import Card from './Card';
import { getPosts } from '../actions/posts';
// import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from 
'react-redux';
const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const posts = useSelector(state => state.posts);
    return (
        <div className='container'>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <div className='mainCardContainer'>
                {
                    posts.map(post => <Card post={post} setCurrentId={setCurrentId} />)
                }
            </div>
        </div>
    )
}
export default Home;