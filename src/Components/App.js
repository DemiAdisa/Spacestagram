import React from "react";
import axios from "axios";
import ImagePost from "./ImagePost";

//Root Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&page=1&api_key=ZkTwfVmLLAtZJ2RV1b4Q74fXfz6nBfxYQnhMEIG0",
      response: [],
    };

    //Make the Request to API

    axios.get(this.state.apiUrl).then((res) => {
      this.setState({ response: res });
    });
  }

  //.then((imgObj) => console.log(imgObj));

  //console.log(imgObj.json);

  render() {
    return (
      <div className="ui container">
        <div className="ui feed" style={{ textAlign: "center" }}>
          <h1 className="ui header">Spacestagram</h1>
          <span>Brought to you by NASA!</span>

          <ImagePost contentData={this.state.response} />
        </div>
      </div>
    );
  }
}

export default App;
