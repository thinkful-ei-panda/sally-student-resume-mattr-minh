import React from 'react';
import img from './sally-student-resume-pic.jpg';

function Header() {
    return (
        <header>
            <h1>Sally Student</h1>
            <img src={img}/>
            <address> Manhattan, New York </address>
        </header>
    )
}

export default Header