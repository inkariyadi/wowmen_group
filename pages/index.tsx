// Import Modules
import React, { useState } from 'react';
import Head from 'next/head';
import RoundedRectangle from 'components/RoundedRectangle';

function Home() {
  // TODO: Change dummy data to fetched data
  const [socmed1, setSocmed1] = useState(
    [
      {idx: 0, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 1, src: 'images/about/ceo-2.svg', alt: 'gambar', href: '/'},
      {idx: 2, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 3, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 4, src: 'images/about/ceo-3.svg', alt: 'gambar', href: '/'},
      {idx: 5, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 6, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
    ]
  );
  // TODO: Change dummy data to fetched data
  const [socmed2, setSocmed2] = useState(
    [
      {idx: 0, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 1, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 2, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 3, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 4, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 5, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 6, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
    ]
  );
  // TODO: Change dummy data to fetched data
  const [partners, setPartners] = useState(
    [
      {idx: 0, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 1, src: 'images/about/ceo-2.svg', alt: 'gambar', href: '/'},
      {idx: 2, src: 'images/about/ceo-3.svg', alt: 'gambar', href: '/'},
      {idx: 3, src: 'images/about/ceo-2.svg', alt: 'gambar', href: '/'},
      {idx: 4, src: 'images/about/ceo-3.svg', alt: 'gambar', href: '/'},
      {idx: 5, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
      {idx: 6, src: 'images/about/ceo-1.svg', alt: 'gambar', href: '/'},
    ]
  );
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
              {/* TODO: change attribute with fetched data */}
              {socmed1.map(({ idx, src, alt, href}) => (
                <RoundedRectangle key={idx} type="pink-square" imageSRC={src} imageALT={alt} href={href}/>
              ))}
            </div>
            <div className="home-page-third-socmed-items home-page-third-socmed-items-two">
              {/* TODO: change attribute with fetched data */}
              {socmed2.map(({ idx, src, alt, href}) => (
                <RoundedRectangle key={idx} type="green-rectangle" imageSRC={src} imageALT={alt} href={href}/>
              ))}
            </div>
          </div>
        </div>
        <div className="home-page-last">
          <div className="partner-wrapper">
            {/* TODO: change attribute with fetched data */}
            {partners.map(({ idx, src, alt, href}) => (
              <RoundedRectangle key={idx} type="yellow-circle" imageSRC={src} imageALT={alt} href={href}/>
            ))}
            {/* TODO: Gimana cara bedain kapan pake lingkaran gede kapan pake lingkaran kecil?? */}
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
