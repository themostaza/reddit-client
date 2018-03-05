export const fetchPosts = () => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch({
      type: "FETCH_POSTS_REQUEST"
    });
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch(`https://www.reddit.com/.json`)
      .then(response => response.json())
      .then(json => {
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        const posts = json.data.children.map(post => {
          return {
            author: post.data.author,
            permalink: post.data.permalink,
            subreddit: post.data.subreddit,
            title: post.data.title,
            thumbnail: post.data.thumbnail,
            url: post.data.url
          };
        });
        dispatch({
          type: "FETCH_POSTS_SUCCESS",
          posts: posts
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_POSTS_FAILURE",
          error: err.message
        });
      });
  };
};

export const setSearchedText = searchedText => {
  return {
    type: "SET_SEARCHED_TEXT",
    searchedText: searchedText
  };
};
