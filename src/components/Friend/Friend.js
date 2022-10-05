import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friends }) => {
    const {id,name, email, username } = friends;
    return (
        <div className='friend'>
            <h2>name:{name}</h2>
            <p>Email:{email}</p>
            <p><small>userName:<Link to = {`/friends/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;