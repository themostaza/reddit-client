import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import { fetchPosts, setSearchedText } from "../actions";
import { getFilteredPosts } from "../reducers";
import logo from "../images/logo.png";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-search">
          <label htmlFor="search-text-input">Search: </label>
          <input
            id="search-text-input"
            type="text"
            value={this.props.searchedText}
            onChange={e => this.props.setSearchedText(e.target.value)}
          />
        </div>
        {this.props.posts.map((post, index) => {
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

App.propTypes = {
  posts: PropTypes.array,
  isFetching: PropTypes.bool,
  searchedText: PropTypes.string,
  fetchPosts: PropTypes.func,
  setSearchedText: PropTypes.func
};

const mapStateToProps = state => {
  return {
    posts: getFilteredPosts(state),
    isFetching: state.reddit.isFetching,
    searchedText: state.reddit.searchedText
  };
};

const mapDispatchToProps = {
  fetchPosts: fetchPosts,
  setSearchedText: setSearchedText
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
