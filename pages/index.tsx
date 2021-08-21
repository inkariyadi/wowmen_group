import React from 'react';
import Head from 'next/head';
import RoundedRectangle from 'components/RoundedRectangle';

function Home() {
  return (
    <>
      <Head>
        <title>Wowmen Academy | Home Page</title>
      </Head>
      <div className="home-page">
        <div className="home-page-landing">
          <div className="top">
            <img src="images/homePage/black-flower-wowmen.svg" alt="blak flower wowmen" />
          </div>
          <div className="middle">
            <img src="images/homePage/orange-rectangle.svg" alt="orange rectangle" />
            <img src="images/homePage/outlined-black-star.svg" alt="outlined black star" />
            <img src="images/homePage/solid-yellow-star.svg" alt="solid yellow star" />
            <h1>Hello!</h1>
            <h3>Welcome</h3>
          </div>
          <div className="bottom">
            <img src="images/homePage/solid-green-fountain.svg" alt="solid green fountain" />
            <h2>TO <br/>OUR <br/>PAGE</h2>
          </div>
        </div>
        <div className="home-page-second">
          <img src="images/homePage/three-sleepy-flowers.svg" alt="three sleepy flowers" />
          <div className="description">
            <h1>Us at a Glance.</h1>
            <p>Founded in 2019, Women Group is a platform for women to Learn, Share and Get Inspired from and with one and another to embrace the amazing potential of women. We’re your bestfriend to your inspiring stories and courious minds. Empowering women through gender equity to go <strong>#BeyondStandards</strong></p>
          </div>
        </div>
        <div className="home-page-third">
          <h1>ini buat socmed</h1>
          <div className="home-page-third-socmed">
            <div className="home-page-third-socmed-items">
              <RoundedRectangle type="pink-square" />
              <RoundedRectangle type="pink-square" />
              <RoundedRectangle type="pink-square" />
            </div>
            <div className="home-page-third-socmed-items">
              <RoundedRectangle type="green-rectangle" />
              <RoundedRectangle type="green-rectangle" />
            </div>
          </div>
        </div>
        <div className="home-page-last">
          <div className="partner-wrapper">
            <RoundedRectangle type="yellow-circle-large" />
            <RoundedRectangle type="yellow-circle-medium" />
            <RoundedRectangle type="yellow-circle-small" />
          </div>
          <h1>Past<br/>Partners &<br/>Events</h1>
        </div>
        <div className="home-page-bottom">
          <img src="images/homePage/zigzag-bottom.svg" alt="zigzag bottom" />
        </div>
      </div>
    </>
  );
}

export default Home;
