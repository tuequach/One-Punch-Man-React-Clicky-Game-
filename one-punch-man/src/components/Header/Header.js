import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
    <div className = 'header'>
        <div className = 'title'>One Punch Man!!!</div>
        <div className = 'scores'>
            Score: {this.props.score} Highscore: {this.props.highscore}
        </div>
    </div>
        );
    }
}

export default Header;