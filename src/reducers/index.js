import { combineReducers } from "redux";

const initialState = {
  isFetching: false,
  searchedText: "",
  posts: [],
  error: null
};

const redditReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, isFetching: true, posts: [], error: null };
    case "FETCH_POSTS_SUCCESS":
      return { ...state, isFetching: false, posts: action.posts };
    case "FETCH_POSTS_FAILURE":
      return { ...state, isFetching: false, error: action.error };
    case "SET_SEARCHED_TEXT":
      return { ...state, searchedText: action.searchedText };
    default:
      return state;
  }
};

export default combineReducers({
  reddit: redditReducer
});

export const getFilteredPosts = state => {
  const { posts, searchedText } = state.reddit;
  return posts.filter(post =>
    post.title.toLowerCase().includes(searchedText.toLowerCase())
  );
};
