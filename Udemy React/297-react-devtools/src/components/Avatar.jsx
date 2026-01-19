import React from 'react'
import ReactDOM from 'react-dom';

export default function Avatar(props){
    return <img className="circle-img" src={props.img} alt="avatar_img" />
}