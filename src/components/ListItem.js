import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  toggleSelected = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    const { imageSource, title, author, subreddit, ...otherProps } = this.props;
    return (
      <div className={"ListItem"} {...otherProps}>
        <img className={"ListItem-image"} src={imageSource} alt="" />
        <div className={`ListItem-right`}>
          <p className="ListItem-title">{title}</p>
          <p className="ListItem-author-and-sub">{`${author} - ${subreddit}`}</p>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
