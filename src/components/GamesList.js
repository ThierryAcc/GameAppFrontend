import React from "react";
import Game from "./Game";
import axios from "axios";
var _ = require("lodash");

export default class GamesList extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:8080/games").then((result) => {
      this.setState({
        games: result.data,
      });
    });
  }

  filterGamesByGenre() {
    let allGames = this.state.games.map((game) => {
      return <Game data={game} />
    });

    if(this.props.selectedGenre) {
      let filteredGames = allGames.filter(game => _.find(game.props.data.genres, (g) => g.name === this.props.selectedGenre));
      allGames = filteredGames;
      console.log(filteredGames)
    }

    return <div className="games-list">{allGames}</div>;
  }


  render() {
    if (this.state === null) {
      return <p>GamesList is loading</p>;
    }

    {
      return this.filterGamesByGenre();
    }
  }
}
