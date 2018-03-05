export const cleanRedditApi = redditJson => {
  const posts = redditJson.data.children.map(post => {
    return {
      permalink: post.data.permalink,
      thumbnail: post.data.thumbnail,
      title: post.data.title,
      author: post.data.author,
      subreddit: post.data.subreddit
    };
  });
  return posts;
};

export default {
  cleanRedditApi: cleanRedditApi
};
