import React from "react";
import axios from "axios";
import GenreList from "../components/GenreList";
import GamesList from "../components/GamesList";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenre: null,
    };

    this.setGenre = this.setGenre.bind(this);
  }

  componentDidMount() {
    this.readGenres();
  }

  setGenre(selectedGenre) {
    if(selectedGenre == this.state.selectedGenre) {
      this.setState({
        selectedGenre: null
      });
    } else {
      this.setState({
        selectedGenre,
      });
    }
  }

  readGenres() {
    axios.get("http://localhost:8080/genres").then((result) => {
      this.setState({
        genres: result.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <GenreList genres={this.state.genres} setGenre={this.setGenre}/>
        <GamesList selectedGenre={this.state.selectedGenre} />
      </div>
    );
  }
}
