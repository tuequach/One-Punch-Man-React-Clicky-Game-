import React from 'react';
import './header.css';

const Header = (props) => (
    <div className = 'header'>
        <div className = 'title'>One Punch Man!!!</div>
        <div className = 'scores'>
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;