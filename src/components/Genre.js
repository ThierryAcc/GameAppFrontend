import React from "react";

export default class Genre extends React.Component {
  selectGenre(id) {
    if (this.props.onClick) {
      document.getElementById(id).classList.toggle("selected");
      this.props.onClick();
    }
  }

  render() {
    return (
      <span
        id={this.props.name}
        onClick={() => this.selectGenre(this.props.name)}
        title={"Label:" + this.props.name}
        className="Label Label--outline Label--outline-green"
      >
        {this.props.name}
      </span>
    );
  }
}
