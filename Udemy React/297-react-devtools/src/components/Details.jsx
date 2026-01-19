import React from 'react';
import ReactDOM from 'react-dom';

export default function Details(detailProps){
    return (
        <div>
            <p className="info">{detailProps.detailInfo}</p>
        </div>
    )
}