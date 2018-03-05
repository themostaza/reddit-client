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
    const { imageSource, title, author, subreddit } = this.props;
    return (
      <div className={"ListItem"} onClick={this.toggleSelected}>
        <img className={"ListItem-image"} src={imageSource} />
        <div
          className={`ListItem-right ${
            this.state.isSelected
              ? "ListItem-right-visible"
              : "ListItem-right-hidden"
          }`}
        >
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
  subreddit: PropTypes.string.isRequired
};
