import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import PageRouter from "./router/PageRouter";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <PageRouter />
      </div>
    );
  }
}
