import React from "react";
import "./Rating.css";

function Rating() {
  return (
    <section className="rate">
      <div className="rate_1">
        <div className="rate_2">
          <div className="rate_3">
            <div className="rate_4">
              <p className="as_1">4.8</p>
              <p className="as_2">
                app <br></br>
                store
              </p>
            </div>
            <div className="rate_5">
              <img
                className="img_1"
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                alt=""
              />
            </div>
            <div className="rate_6">
              <img
                className="img_2"
                src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
                alt=""
              />
              <p>Download the app</p>
            </div>
          </div>
          <div className="play">
            <div className="rate_4">
              <p className="as_1">4.7</p>
              <p className="as_2">
                play <br></br>
                store
              </p>
            </div>
            <div className="rate_5">
              <img
                className="img_1"
                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
                alt=""
              />
            </div>
            <div className="rate_6">
              <img
                className="img_2"
                src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
                alt=""
              />
              <p>Download the app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rating;
