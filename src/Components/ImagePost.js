import React from "react";

/*This is a child component of App.js
It serves as a Card to hold the details about the pictures 
returned by the api
*/
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

    //Bind onLikeClick Function to ImagePost Class
    this.onLikeClick = this.onLikeClick.bind(this);
  }

  //Button Click Callback Function
  onLikeClick() {
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
