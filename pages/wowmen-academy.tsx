// Import Modules
import React from 'react';
import Head from 'next/head';
import LibraryCard from 'components/LibraryCard';

function About () {
  const landingAset = [
    {src: 'images/wowmenAcademy/small-white-star.svg', alt: 'small white star'},
    {src: 'images/wowmenAcademy/red-slayer.svg', alt: 'red slayer'},
    {src: 'images/wowmenAcademy/white-wave.svg', alt: 'white wave'},
    {src: 'images/wowmenAcademy/outlined-rounded-star.svg', alt: 'outlined rounded star'},
    {src: 'images/wowmenAcademy/orange-star.svg', alt: 'orange star'},
    {src: 'images/wowmenAcademy/wowmen-logo.svg', alt: 'wowmen logo'},
    {src: 'images/wowmenAcademy/blue-ellipse.svg', alt: 'blue ellipse'},
    {src: 'images/wowmenAcademy/yellow-ellipse.svg', alt: 'yellow ellipse'},
    {src: 'images/wowmenAcademy/green-star.svg', alt: 'green star'},
    {src: 'images/wowmenAcademy/blue-rounded-star.svg', alt: 'blue rounded star'},
    {src: 'images/wowmenAcademy/big-white-star.svg', alt: 'big white star'},
  ];
  return(
    <>
      <Head>
        <title>Wowmen Academy | Wowmen Academy</title>
      </Head>
      <div className="wowmen">
        <div className="wowmen-top">
          <p>WOWMEN GROUP PROUDLY PRESENTS</p>
          {landingAset.map(({src, alt}) => 
            alt === 'wowmen logo' ? 
              <div className="wowmen-top-logo">
                <img className="wowmen-top-logo-img" key={alt} src={src} alt={alt}/>
              </div>
              :
              <img className="wowmen-top-img" key={alt} src={src} alt={alt}/>
          )}
        </div>
        <div className="wowmen-second">
          <div className="wowmen-second-left">
            <img src='images/wowmenAcademy/sunset-three-circle.svg' alt='sunset three circle' />
            <img src='images/wowmenAcademy/blue-ellipse-2.svg' alt='blue ellipse' />
            <img src='images/wowmenAcademy/green-star-2.svg' alt='green star' />
            <div className="wowmen-second-logo">
              <img src='images/wowmenAcademy/logo-wowmen-academy.svg' alt='logo wowmen academy' />
            </div>
            <img src='images/wowmenAcademy/yellow-star.svg' alt='yellow star' />
            <img src='images/wowmenAcademy/pink-diamond.svg' alt='pink diamond' />
            <img src='images/wowmenAcademy/blue-peer.svg' alt='blue peer' />
          </div>
          <div className="wowmen-second-right">
            <h1>Introduction</h1>
            <p>
              <strong>Wowmen Academy</strong> is and education platform providing learning contents and programs (learning made easy!)<br/><br/>Focusing on building women’s capabilities to act on the world, fostering the development of women’s empowerment, and create future women leaders and changemakers.
            </p>
          </div>
        </div>
        {/* PADILL SECTION */}
        <div className="wowmen-third">

        </div>
        <div className="wowmen-learning">
          <h1>Our Learning Library</h1>
          <div className="wowmen-learning-content">
            <LibraryCard title="Lesson Plans" desc="Our ready-made lesson plans make it easy for classroom educators." buttontxt="GET MY PLAN" href="/" />
            <LibraryCard title="Tips" desc="More tips about Education!" buttontxt="GET HERE" href="/" />
            <LibraryCard title="Inspiring" desc="xxxxxxxxxxx" buttontxt="GET TO KNOW" href="/" />
            <LibraryCard title="Activities" desc="Get hands-on with learning! " buttontxt="EXPLORE NOW" href="/" />
          </div>
        </div>
        <div className="wowmen-last">
          <img src='images/wowmenAcademy/star-left.svg' alt='star left' />
          <h1>#JoinTheSmartCult</h1>
          <img src='images/wowmenAcademy/star-right.svg' alt='star right' />
        </div>
      </div>
    </>   
  );
}

export default About;
