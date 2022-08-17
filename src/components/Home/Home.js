import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <div className="home2">
          <img
            className="lg"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
            alt=""
          />
        </div>
        <div className="home3">
          <div className="home4">
            <a className="line" href="/">
              credit score check
            </a>
          </div>
          <div className="home4">
            <a className="line" href="/">
              credit card bill payment
            </a>
          </div>
        </div>
      </div>
      <div className="home5">
        <div className="home6">
          pay credit card bill. earn guaranteed ₹200 back.
        </div>
        <div className="home7">
          <a className="line1" href="/">
            <div className="home8">claim now</div>
            <img
              className="lg1"
              src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="home9">
        <div className="home0">
          rewards for paying <br />
          credit card bills.
        </div>
        <div className="home01">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <div className="home02">Download CRED</div>
      </div>
    </div>
  );
}

export default Home;
