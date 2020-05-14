import React from "react";
import Genre from "./Genre";

class Game extends React.Component {
  render() {
    let genres = this.props.data.genres.map((genre) => {
      return <Genre key={genre.id} id={genre.id} name={genre.name} />;
    });

    return (
      <div className="game">
        <img src="https://via.placeholder.com/200x250" alt="cover" />
        <div className="game-title">{this.props.data.title}</div>
        <div className="game-price">{this.props.data.suggestedPrice}</div>
        {genres}
      </div>
    );
  }
}

export default Game;
