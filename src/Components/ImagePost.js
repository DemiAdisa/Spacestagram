import React from "react";

class ImagePost extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.contentData);

    this.state = {
      isLiked: false,
      buttonValue: "Like",
      heartType: "heart outline icon",
      buttonType: "ui button",
    };

    this.onLikeClick = this.onLikeClick.bind(this);
  }

  //Button Click Callback Function
  onLikeClick() {
    console.log("I was clicked");

    //Gives the Like Button a Little Animation using React State
    if (!this.state.isLiked) {
      this.setState({
        isLiked: true,
        heartType: "heart icon",
        buttonType: "ui red button",
        buttonValue: "Unlike",
      });
    } else {
      this.setState({
        isLiked: false,
        heartType: "heart outline icon",
        buttonType: "ui button",
        buttonValue: "Like",
      });
    }
  }

  render() {
    return (
      <div className="ui card" style={{ margin: "15px auto" }}>
        <div className="image">
          <img src="/images/avatar2/large/kristy.png" />
        </div>

        <div className="ui content">
          <p>Description</p>
        </div>

        <button className={this.state.buttonType} onClick={this.onLikeClick}>
          <i className={this.state.heartType}></i>
          {this.state.buttonValue}
        </button>
      </div>
    );
  }
}

export default ImagePost;
