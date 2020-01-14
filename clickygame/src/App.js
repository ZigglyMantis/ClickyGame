import React, { Component } from 'react';
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import images from "./warframes.json"
import Wrapper from "./components/Wrapper/Wrapper"
import ImageCard from "./components/ImageCards/ImageCard"



class App extends Component {
  state = {
    images: images,
    score: 0,
    Wins: 0,
    guessedImages: [],
    victoryCondition: ""
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
  guessedImages(x) {
    if (this.state.guessedImages.includes(parseInt(x))) {
      return true
    } else {
      return false
    };
  };

  // function for correct guesses all 16
  winCondition() {
    if (this.state.guessedImages.length === 16) {
      this.setState({
        victoryCondition: "Congratulations you won the game!!!",
        Wins: this.state.Wins + 1,
        score: 0,
        guessedImages: []
      });
    };
  };
  // on click events
  onMouse1 = event => {
    const { x } = event.target;
    if (this.guessedImages(x)) {
      this.setState({
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
        <Navbar score={this.state.score} winCondition={this.state.winCondition} Wins={this.state.Wins} />
        <Banner />
        <Wrapper>{
          this.state.images.map(image => (
            <ImageCard id={image.id} key={image.id} alt={image.id} image={image.image} count={this.state.count} onMouse1={this.onMouse1} />
          ))
        }</Wrapper>
      </div>
    )
  }
}

export default App;
