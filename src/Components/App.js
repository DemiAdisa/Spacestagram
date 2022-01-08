import React from "react";
import axios from "axios";
import ImagePost from "./ImagePost";

//This is the Root Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&page=1&api_key=ZkTwfVmLLAtZJ2RV1b4Q74fXfz6nBfxYQnhMEIG0",
      response: [],
    };
  }

  async componentDidMount() {
    //Make the Request to API
    await axios.get(this.state.apiUrl).then((res) => {
      this.setState({ response: res.data.photos });
    });
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui feed" style={{ textAlign: "center" }}>
          <h1 className="ui bold header" style={{ color: "white" }}>
            Spacestagram
          </h1>
          <span style={{ color: "white" }}>
            Brought to you by NASA's Image API!
          </span>

          {
            /*
            Using the javascript map function,
            we parse through the JSON retuned by the API 
            and use the ImagePost component to render it  
            */
            this.state.response.map((image) => {
              return (
                <ImagePost
                  camName={image.camera.name}
                  fullName={image.camera.full_name}
                  imgSrc={image.img_src}
                  date={image.earth_date}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
