import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Axios from "axios";

class Home extends Component {
  state = {
    posts: [],
    currentSlide: 2
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

  slider(direction) {
    let currentSlide = this.state.currentSlide;
    currentSlide += direction;
    if (currentSlide > 3) {
      currentSlide = 1;
    } else if (currentSlide < 1) {
      currentSlide = 3;
    }
    this.setState({ currentSlide });
  }

  render() {
    const { currentSlide } = this.state;
    console.log(currentSlide);
    return (
      <div className="wrapper">
        <div className="slider-wrap">
          <img
            alt="Ritual cups logo"
            src="/assets/ritual.jpg"
            className={`slide_1 ${
              currentSlide === 1 ? `slider--show` : `slider--hide`
            }`}
          />
          <img
            alt="Red head girl"
            src="/assets/Eneco.jpg"
            className={`slide_2 ${
              currentSlide === 2 ? `slider--show` : `slider--hide`
            }`}
          />
          <img
            alt="tam tam reception"
            src="/assets/tamtam.png"
            className={`slide_3 ${
              currentSlide === 3 ? `slider--show` : `slider--hide`
            }`}
          />
          <div className="slider-buttons">
            <button className="left-button" onClick={() => this.slider(-1)}>
              <i className="fa fa-arrow-left" />
            </button>

            <button className="center-button">View Case</button>
            <button className="right-button" onClick={() => this.slider(1)}>
              <i className="fa fa-arrow-right" />
            </button>
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
