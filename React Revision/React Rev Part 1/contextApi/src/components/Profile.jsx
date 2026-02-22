import React, {useContext} from 'react';
import {userContext} from '../UserContext'

export default function Profile(){
    const {user} = useContext(userContext);
    if(!user) return <div>Please login!</div>
    console.log(user);
    return (
        <>
            <h1>Welcome {user.userName}</h1>
        </>
    )
}