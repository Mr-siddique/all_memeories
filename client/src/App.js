import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Card';
import { getPosts } from './actions/posts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 
'react-redux';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const posts = useSelector(state => state.posts);
    return (
        <div className='container'>
            <Header />
            <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/auth' exact component={Auth}/>
            </Switch>
        </div>
    )
}
export default App;