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
  const currentHero = 
    event.target.alt;
  const alreadyClickedHero = 
    this.state.clickedHero.indexOf(currentHero) > -1;

//resetting game and heroes into different ordered based on user's guess
if (alreadyClickedHero) {
  this.setState({ 
      hero: this.state.hero.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedHero: [],
      score:0
  });
    alert ("GAME OVER! :( Play Again");
} else {
  this.setState({
    hero: this.state.hero.sort(function(a, b){
      return 0.5 - Math.random();
    }),
    clickedHero: this.state.clickedHero.concat(
      currentHero),
      score: this.state.score + 1 
    }, 




export default App;
