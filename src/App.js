import React, { Component } from "react";
import ListItem from "./ListItem";
import redditPosts from "./redditPosts.json";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  renderIntro = () => {
    return (
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {redditPosts.map((post, index) => {
          return (
            <ListItem
              key={post.permalink}
              imageSource={post.thumbnail}
              title={post.title}
              author={post.author}
              subreddit={post.subreddit}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
