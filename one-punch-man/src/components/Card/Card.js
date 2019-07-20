import React from 'react';
import "./card.css";

function Card (props) {
    <div className = 'card' onClick={props.clickedCard}>
         <div className= 'img-container'>
            <img alt = {props.name} src={props.image} />
        </div>
    </div>
}
export default Card;