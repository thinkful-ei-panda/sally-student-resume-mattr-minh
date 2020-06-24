import React from 'react';
import img from './sally-student-resume-pic.jpg';

function Header(props) {
    return (
        <header>
            <h1>{props.name}</h1>
            <img src={img} />
            <address> Manhattan, New York </address>
        </header>
    )
}

export default Header