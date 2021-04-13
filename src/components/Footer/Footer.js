import React from 'react';

import './Footer.css';

export default function Footer(){
    const date = new Date().getFullYear();
    return(
        <div className="d-flex align-content-end flex-wrap footer">
            {date} &copy; Emerald Queen Contest Limited -  
            <a href="https://gerald.netlify.com" target="_blank">
                 handcrafted by Lucignation
            </a>
        </div>
    )
}