//all dependencies and files are imported for use
import React from 'react';
import hero from './hero.json';

class App extends Component {
//setting all state to empty or 0
  state = {
    cards,
    score: "",
    clickedHero: []    
  };

//creating onClick event for when image is clicked, a hero-card is taken out of the array
onClick = event => {
  const currentHero = event.target.alt;
  const alreadyClickedHero = 
    this.state.clickedHero.indexOf(currentHero) > -1;

}


export default App;
