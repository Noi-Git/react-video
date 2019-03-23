import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("cute dogs");
  }

  onTermSubmit = async term => {
    // console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    // console.log("From the App!", video);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "25px" }}>
        <div className="welcome welcome-head">
          <h1>Search video from youTube.com</h1>
          <p className="welcome welcome-text">
            Simply type the video you are looking for in the search bar and
            press enter.
          </p>
        </div>

        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>

        <div className="welcome welcome-footer">
          <p>This application created using React.js</p>
          <p>Noi Sinnang</p>
        </div>
      </div>
    );
  }
}

export default App;
