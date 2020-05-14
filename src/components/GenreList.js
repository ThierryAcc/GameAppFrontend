import React from "react";
import Genre from "./Genre";

export default class GenreList extends React.Component {
  render() {
    let genres = [];
    if (this.props !== null && this.props.genres !== undefined) {
      genres = this.props.genres.map((genre) => {
        return (
          <Genre
            onClick={() => this.props.setGenre(genre.name)}
            key={genre.id}
            id={genre.id}
            name={genre.name}
          />
        );
      });
    }

    if (genres === null) {
      return <p>Genres loading</p>;
    }

    {
      return genres;
    }
  }
}
