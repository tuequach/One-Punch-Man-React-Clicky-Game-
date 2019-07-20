//all dependencies and files are imported for use
import React, {Component} from 'react';
import hero from './hero.json';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';


class App extends Component {
  //setting all state to empty or 0
  state = {
    hero,
    score: 0,
    clickedHero: []
  };

  //creating onClick event for when image is clicked, a hero-card is taken out of the array
  imageClick = event => {
    const currentHero =
      event.target.alt;
    const alreadyClickedHero =
      this.state.clickedHero.indexOf(currentHero) > -1;

    //resetting game and heroes into different ordered based on user's guess (if hero already selected, game resets and user looses)
    if (alreadyClickedHero) {
      this.setState({
        hero: this.state.hero.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedHero: [],
        score: 0
      });
        alert("GAME OVER! :( Play Again");

      //if clicked on a hero haven't guessed, score increases and heroes are randomized again
    } else {
      this.setState({
        hero: this.state.hero.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedHero: this.state.clickedHero.concat(
          currentHero),
        score: this.state.score + 1
      },

        //if user clicked and guess all 20th heroes, user get a congrats message and game resets itself
        () => {
          if (this.state.score === 20) {
            alert("Yay! You've guessed all the Heroes. You've Won!");
            this.setState({
              hero: this.state.hero.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedHero: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //the order of components being rendered 
  render () {
    return (
      <div>
        <Header />
        <div className="wrapper">
        {this.state.hero.map(hero => (
          <Card
            imageClick={this.imageClick}
            id={hero.id}
            key={hero.id}
            image={hero.image}
          />
        ))}
      </div>
      <Footer />
      </div>
    );
  }
}


export default App;
