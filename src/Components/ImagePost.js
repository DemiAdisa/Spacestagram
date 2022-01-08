import React from "react";

/*This is a child component of App.js
It serves as a Card to hold the details about the pictures 
returned by the API
*/
class ImagePost extends React.Component {
  constructor(props) {
    super(props);

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
          <img src={this.props.imgSrc} alt="Image From Nasa" />
        </div>

        <div className="ui content">
          <div className="title">
            <label className="ui label">
              Title: Picture captured by NASA's {this.props.rover} Rover using
              its {this.props.fullName}
            </label>
          </div>

          <div className="rover status">
            <label className="ui label">
              Rover Status: {this.props.roverStatus}
            </label>
          </div>

          <div className="picture date">
            <label className="ui label">
              Date of Capture: {this.props.date}
            </label>
          </div>
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
