// Import Modules
import React from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';

function About () {
  const landingAset = [
    {src: 'images/wowmenAcademy/big-white-star.svg', alt: 'big white star'},
    {src: 'images/wowmenAcademy/blue-ellipse.svg', alt: 'blue ellipse'},
    {src: 'images/wowmenAcademy/blue-rounded-star.svg', alt: 'blue rounded star'},
    {src: 'images/wowmenAcademy/green-star.svg', alt: 'green star'},
    {src: 'images/wowmenAcademy/red-slayer.svg', alt: 'red slayer'},
    {src: 'images/wowmenAcademy/outlined-rounded-star.svg', alt: 'outlined rounded star'},
    {src: 'images/wowmenAcademy/small-white-star.svg', alt: 'small white star'},
    {src: 'images/wowmenAcademy/white-wave.svg', alt: 'white wave'},
    {src: 'images/wowmenAcademy/wowmen-logo.svg', alt: 'wowmen logo'},
    {src: 'images/wowmenAcademy/yellow-ellipse.svg', alt: 'yellow ellipse'},
  ];
  return(
    <>
      <Head>
        <title>Wowmen Academy | Wowmen Academy</title>
      </Head>
      <Navbar/>
      <div className="wowmen">
        <div className="wowmen-top">
          <p>WOWMEN GROUP PROUDLY PRESENTS</p>
          {landingAset.map(({src, alt}) => 
            <img key={alt} src={src} alt={alt}/>
          )}
        </div>
      </div>
    </>   
  );
}

export default About;
