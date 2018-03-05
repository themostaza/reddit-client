import React, { Component } from "react";
import ListItem from "../components/ListItem";
import logo from "../images/logo.png";
import { cleanRedditApi } from "../utils/reddit";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isFetching: true,
      error: null,
      searchedText: "",
      clickedPost: ""
    };
  }

  componentDidMount() {
    fetch("https://www.reddit.com/.json")
      .then(res => res.json())
      .then(json => {
        const posts = cleanRedditApi(json);
        this.setState({
          posts: posts,
          isFetching: false
        });
      })
      .catch(err => {
        this.setState({
          error: "Erroraccio in fase di fetch",
          isFetching: false
        });
      });
  }

  handleSearchTextChange = e => {
    this.setState({ searchedText: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-search">
          <label>Search for stuff:</label>
          <input
            type="text"
            onChange={this.handleSearchTextChange}
            value={this.state.searchedText}
          />
        </div>
        <div className="App-clicked-post">
          <p>{`Elemento cliccato: ${this.state.clickedPost}`}</p>
        </div>
        {this.state.isFetching && (
          <h3 className="App-loading">
            Sto fechando le API di Reddit, dammi un momento...
          </h3>
        )}
        {this.state.posts
          .filter(post =>
            post.title
              .toLowerCase()
              .includes(this.state.searchedText.toLowerCase())
          )
          .map((post, index) => {
            return (
              <ListItem
                key={post.permalink}
                imageSource={post.thumbnail}
                title={post.title}
                author={post.author}
                subreddit={post.subreddit}
                onClick={() => this.setState({ clickedPost: post.title })}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
