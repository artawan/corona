import React, { Component } from "react";

import Table from "./components/table/table.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount(){
    fetch('https://api.kawalcorona.com/')
    .then(response => response.json())
    .then(lists => this.setState({ list: lists }))
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>Corona Lists </h1>
        <Table list={list} />
      </div>
    );
  }
}

export default App;
