import React from 'react';
import moment from 'moment';
import img from './../images/memories.jpg';
import { deletePost } from './../actions/posts'
import { useDispatch } from "react-redux";
const Card = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const { creator, title, message, tags, file, createdAt } = post;
    const user = JSON.parse(localStorage.getItem('profile'));
    // console.log(`this is a file ${file}`);
    return (
        <div className="cardContainer">
            <div className='creator'>
                <h5 className='date'>{moment(createdAt).fromNow()}</h5>
                <h5 className="creatorName">{post.name}</h5>
            </div>
            <img src={file} alt='card image' />
            <div className='moreDetails'>
                <h4 className='title'>{title}</h4>
                <p className='message'>{message}</p>
                <h5 className='tags'>{tags.map((tag) => `#${tag} `)}</h5>
            </div>
            {
                (user?.result?._id === post.creator || user?.result?.googleId === post?.creator) &&(
                    <div className='buttonContainer'>
                        <button className='edit' onClick={() => { setCurrentId(post._id) }}>...</button>
                        <button className='delete' onClick={() => { dispatch(deletePost(post._id)) }}>DELETE</button>
                    </div>)
            }
        </div>
    )
}
export default Card;