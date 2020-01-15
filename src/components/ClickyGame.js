import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import Banner from "./Banner/Banner";
import images from "../images";

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    navMsgColor: "",

    navMessage: "Click an image!",

    allCharacters: this.shuffleArray(),

    wasClicked: [],

  };

  clickEvent = this.checkClicked.bind(this);

  shuffleArray() {
    const newArr = images.slice();
    const shuffleArr = [];

    while (newArr.length > 0) {
      shuffleArr.push(
        newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
      );
    }

    return shuffleArr;
  }

  checkClicked(clickedElem) {
    const prevState = this.state.wasClicked.slice();

    const shuffled = this.shuffleArray();
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.wasClicked.includes(clickedElem)) {
      if (score === highScore) {
        score++;
        highScore++;

      } else {
        score++;
      }

      prevState.push(clickedElem);
    }

    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: "incorrect",
        navMessage: "Incorrect guess!",
        allCharacters: shuffled,
        wasClicked: [],
      });
    }

    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: "correct",
      navMessage: "You Guessed Correctly!",
      allCharacters: shuffled,
      wasClicked: prevState,
    });

    return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
  }

  render() {

    const state = this.state;
    return (
      <div className="crt">
        <Navbar 
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Banner />
        <Container
          characters={state.allCharacters}
          clickEvent={this.clickEvent}
        />
      </div>
    );


  }
}

export default ClickyGame;
