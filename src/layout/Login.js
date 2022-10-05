import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../components/Friend/Friend';

const Login = () => {
    const login = useLoaderData();
    console.log(login)
    return (
        <div>
            <h1>this is a good friends.yay: {login.length}</h1>
            {
              login.map(friends => <Friend
              key={friends.id}
              friends = {friends}
              ></Friend>)
            }
        </div>
    );
};

export default Login;