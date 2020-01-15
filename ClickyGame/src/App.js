import React, { Component } from 'react';
import Banner from "./components/Banner/Banner"
import NavTabs from "./components/NavTabs/NavTabs"
import images from "./warframes.json.js.js"
import Wrapper from "./components/Wrapper/Wrapper"
import ImageCard from "./components/Wrapper/ImageCards/ImageCard"



class App extends Component {
  state = {
    images: images,
    score: 0,
    Wins: 0,
    guessedImages: [],
    victoryCondition: "",
    winCondition: ""
  };

  // generate from 0-15 to pick image
  generateRandomImage(genArr) {
    var warframeIndex = [];
    var randomResult = [];
    while (warframeIndex.length < 16) {
      var z = Math.floor(Math.random() * 16);
      if (warframeIndex.indexOf(z) === -1) warframeIndex.push(z);
    }

    warframeIndex.map((index) => randomResult.push(genArr[index]))
    return randomResult
  };
  // function for guessed correctly and not up to 15
  guessedImages(alt) {
    if (this.state.guessedImages.includes(parseInt(alt))) {
      return true
    } else {
      return false
    };
  };

  // function for correct guesses all 16
  winCondition() {
    if (this.state.guessedImages.length === 16) {
      this.setState({
        winCondition: "Congratulations you won the game!!!",
        Wins: this.state.Wins + 1,
        score: 0,
        guessedImages: []
      });
    };
  };
  // on click events
  onMouse1 = event => {
    const { alt } = event.target;
    if (this.guessedImages(alt)) {
      this.state.guessedImages = []
      this.setState({
        images: this.generateRandomImage(this.state.images),
        victoryCondition: "Sorry, but you already picked that Warframe.",
        score: 0
      });
      console.log(this.state.images)
    } else {
      var correctGuess = this.state.guessedImages
      correctGuess.push(parseInt(alt))

      this.setState({
        score: correctGuess.length,
        guessedImages: correctGuess,
        images: this.generateRandomImage(this.state.images),
        victoryCondition: "Good!"
      })
    }
    this.winCondition()
  }
  // render
  render() {
    return (
      <div>
        <NavTabs score={this.state.score} victoryCondition={this.state.victoryCondition} Wins={this.state.Wins} />
        <Banner />
        <Wrapper>
          {
            this.state.images.map(image => (
              <ImageCard
                id={image.id}
                key={image.id}
                alt={image.id}
                image={image.image}
                count={this.state.count}
                onMouse1={this.onMouse1} 
              />
            ))
          }

        </Wrapper>
      </div>
    )
  }
}

export default App;
