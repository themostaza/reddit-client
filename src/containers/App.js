import React, { Component } from "react";
import ListItem from "../components/ListItem";
import logo from "../images/logo.png";
import redditPosts from "../data/redditPosts.json";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
