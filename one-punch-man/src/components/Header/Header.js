import React from 'react';
import './header.css';

function Header (props) {
    <div className = 'header'>
        <div className = 'tittle'>{props.children}</div>
        <div className = 'scores'>Highscore: {props.highscore}
        </div>
    </div>
};

export default Header;