import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Axios from "axios";

class Home extends Component {
  state = {
    posts: [],
    shiftSlideToRight: "",
    shiftSlideToLeft: "",
    currentSlide: 1
  };

  componentWillMount() {
    Axios(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
        process.env.REACT_APP_ACCESS_TOKEN
      }`
    ).then(json => {
      const recentPostsInfo = json.data.data.slice(
        json.data.length - 6,
        json.data.length
      );

      const posts = recentPostsInfo.map(post => {
        return {
          image: post.images.standard_resolution.url,
          text: post.caption ? post.caption.text : ""
        };
      });
      this.setState({ posts });
    });
  }

  toggleSliderClass = buttonName => {
    const { currentSlide } = this.state;
    if (buttonName === "right" && this.state.currentSlide === 1) {
      this.setState({
        shiftSlideToLeft: "shift_to_left",
        shiftSlideToRight: "",
        currentSlide: 2
      });
      return;
    }
    if (
      (buttonName === "right" && currentSlide === 0) ||
      (currentSlide === 2 && buttonName === "left")
    ) {
      this.setState({
        shiftSlideToLeft: "",
        shiftSlideToRight: "",
        currentSlide: 1
      });
      return;
    }
    if (buttonName === "left" && this.state.currentSlide === 1) {
      this.setState({
        shiftSlideToLeft: "",
        shiftSlideToRight: "shift_to_right",
        currentSlide: 0
      });
    }
  };

  render() {
    const { shiftSlideToLeft, shiftSlideToRight } = this.state;

    return (
      <div className="wrapper">
        <div className="slideshow_container">
          <div className="slider-buttons">
            <button
              className="left-button"
              onClick={() => this.toggleSliderClass("left")}
            >
              <i className="fa fa-arrow-left" />
            </button>
            <button className="center-button">View Case</button>
            <button
              className="right-button"
              onClick={() => this.toggleSliderClass("right")}
            >
              <i className="fa fa-arrow-right" />
            </button>
          </div>
          <div
            className={`slides_container ${shiftSlideToLeft} ${shiftSlideToRight}`}
          >
            <div id="section_1" className="section" />
            <div id="section_2" className="section" />
            <div id="section_3" className="section" />
          </div>
        </div>

        <div className="instagram-posts-wrapper">
          <ul className="instagram-posts">
            {this.state.posts.map((post, index) => {
              if (post.text !== "") {
                return (
                  <li key={index}>
                    <img alt="instagram post" src={post.image} />
                    <p className="insta-post-text">{post.text}</p>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <img alt="post" src={post.image} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
