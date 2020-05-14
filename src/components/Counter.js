import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter : props.startAt
    };

    this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton() {
    let counter = this.state.counter;
    counter++;

    if (this.props.notify !== undefined) {
        this.props.notify(counter);
    }

    this.setState({
      counter: counter
    })
  }

    render() {
        return (
            <>
                <div>{this.state.counter} gamerz love this</div>
                <button className="btn btn-primary mr-2" onClick={this.clickedButton}>{this.props.name}</button>
            </>
        );
    }
}

export default Counter;