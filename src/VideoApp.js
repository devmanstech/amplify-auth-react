import React from "react";
import Navigator from './Navigator';

class VideoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState == "signedIn") {
      return (
        <React.Fragment>
          <Navigator />
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="http://getwallpapers.com/wallpaper/small-retina/1/4/b/25241.jpg" width="100%" height="300" alt="Image" />
                <div class="carousel-caption">
                  <h3>Sell $</h3>
                  <p>Money Money.</p>
                </div>
              </div>
            </div>

          </div>


          <div class="container text-center">
            <div class="row">
              <h3>What We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We DoWhat We Do</h3>
            </div>

            <div class="row">
              <div class="col-sm-4">

                <p>Current Project</p>
              </div>
              <div class="col-sm-4">
                <div class="video-container">
                  <video
                    id="amazon-ivs-videojs"
                    class="video-js vjs-4-3 vjs-big-play-centered"
                    controls
                    autoplay
                    playsinline
                  ></video>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="well">
                  <p>Some text..</p>
                </div>
                <div class="well">
                  <p>Some text..</p>
                </div>
              </div>
            </div>

            <footer>
              This is footer area
            </footer>
          </div>
          
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default VideoApp;