// Import Modules
import React from 'react';
import Head from 'next/head';

// Import Components
import LibraryCard from 'components/LibraryCard';

function About () {
  const landingAset = [
    {styleName: 'wowmen-top-img wowmen-top-img-1', src: 'images/wowmenAcademy/small-white-star.svg', alt: 'small white star'},
    {styleName: 'wowmen-top-img wowmen-top-img-2', src: 'images/wowmenAcademy/red-slayer.svg', alt: 'red slayer'},
    {styleName: 'wowmen-top-img wowmen-top-img-3', src: 'images/wowmenAcademy/white-wave.svg', alt: 'white wave'},
    {styleName: 'wowmen-top-img wowmen-top-img-4', src: 'images/wowmenAcademy/outlined-rounded-star.svg', alt: 'outlined rounded star'},
    {styleName: 'wowmen-top-img wowmen-top-img-5', src: 'images/wowmenAcademy/orange-star.svg', alt: 'orange star'},
    {styleName: 'wowmen-top-logo-img', src: 'images/wowmenAcademy/wowmen-logo.svg', alt: 'wowmen logo'},
    {styleName: 'wowmen-top-img wowmen-top-img-6', src: 'images/wowmenAcademy/blue-ellipse.svg', alt: 'blue ellipse'},
    {styleName: 'wowmen-top-img wowmen-top-img-7', src: 'images/wowmenAcademy/yellow-ellipse.svg', alt: 'yellow ellipse'},
    {styleName: 'wowmen-top-img wowmen-top-img-8', src: 'images/wowmenAcademy/green-star.svg', alt: 'green star'},
    {styleName: 'wowmen-top-img wowmen-top-img-9', src: 'images/wowmenAcademy/blue-rounded-star.svg', alt: 'blue rounded star'},
    {styleName: 'wowmen-top-img wowmen-top-img-10', src: 'images/wowmenAcademy/big-white-star.svg', alt: 'big white star'},
  ];
  const secondAset = [
    {styleName: 'wowmen-second-left-img wowmen-second-left-img-1', src: 'images/wowmenAcademy/sunset-three-circle.svg', alt: 'sunset three circle'},
    {styleName: 'wowmen-second-left-img wowmen-second-left-img-2', src: 'images/wowmenAcademy/blue-ellipse-2.svg', alt: 'blue ellipse'},
    {styleName: 'wowmen-second-left-img wowmen-second-left-img-3', src: 'images/wowmenAcademy/green-star-2.svg', alt: 'green star'},
    {styleName: 'wowmen-second-left-logo-img', src: 'images/wowmenAcademy/logo-wowmen-academy.svg', alt: 'logo wowmen academy'},
    {styleName: 'wowmen-second-left-img wowmen-second-left-img-4', src: 'images/wowmenAcademy/yellow-star.svg', alt: 'yellow star'},
    {styleName: 'wowmen-second-left-img wowmen-second-left-img-5', src: 'images/wowmenAcademy/pink-diamond.svg', alt: 'pink diamond'},
    {styleName: 'wowmen-second-left-img wowmen-second-left-img-6', src: 'images/wowmenAcademy/blue-peer.svg', alt: 'blue peer'},
  ];

  const thirdAsset = [
    {
      title: 'ww-1',
      img: 'white-wind.svg',
    },
    {
      title: 'ww-2',
      img: 'white-wind.svg',
    },
    {
      title: 'values',
      img: 'taro-pacman.svg',
    },
    {
      title: 'about',
      img: 'blue-star.svg',
    },
    {
      title: 'mission',
      img: 'green-triangle.svg',
    },
    {
      title: 'vision',
      img: 'orange-ellipse.svg',
    },
  ];

  const valueSectionAsset = [
    {
      src: '/images/wowmenAcademy/thirdSection/empower.svg',
      alt: 'empower-title',
      className: 'section-title value-title',
    },
    {
      src: '/images/wowmenAcademy/thirdSection/value-detail.svg',
      alt: 'empower-detail',
      className: 'empower-detail',
    },
    {
      src: '/images/wowmenAcademy/thirdSection/mini-green-triangle.svg',
      alt: 'green-mini-triangle',
      className: 'green-mini-triangle',
    },
    {
      src: '/images/wowmenAcademy/thirdSection/blue-worm.svg',
      alt: 'blue-worm',
      className: 'blue-worm',
    },
    {
      src: '/images/wowmenAcademy/thirdSection/yellow-star.svg',
      alt: 'yellow-star',
      className: 'yellow-star',
    },
    {
      src: '/images/wowmenAcademy/thirdSection/half-pink-circle.svg',
      alt: 'half-pink-circle',
      className: 'half-pink-circle',
    },
  ];

  const vision = [
    'FADHIL MUHAMMAD RAFI',
    'FADHIL RAFI',
    'FADHIL MUHAMMAD',
  ];

  return(
    <>
      <Head>
        <title>Wowmen Academy | Wowmen Academy</title>
      </Head>
      <div className="wowmen">
        <div className="wowmen-top">
          <p>WOWMEN GROUP PROUDLY PRESENTS</p>
          {landingAset.map(({src, alt, styleName}) => 
            alt === 'wowmen logo' ? 
              <div className="wowmen-top-logo">
                <img className={styleName} key={alt} src={src} alt={alt}/>
              </div>
              :
              <img className={styleName} key={alt} src={src} alt={alt}/>
          )}
        </div>
        <div className="wowmen-second">
          <div className="wowmen-second-left">
            {secondAset.map(({src, alt, styleName}) => 
              alt === 'logo wowmen academy' ? 
                <div className="wowmen-second-left-logo">
                  <img className={styleName} key={alt} src={src} alt={alt}/>
                </div>
                :
                <img className={styleName} key={alt} src={src} alt={alt}/>
            )}
          </div>
          <div className="wowmen-second-right">
            <h1>Introduction</h1>
            <img className="wowmen-second-right-small" src="/images/wowmenAcademy/rotate-background.svg"/>
            <p>
              <strong>Wowmen Academy</strong> is and education platform providing learning contents and programs (learning made easy!)<br/><br/>Focusing on building women’s capabilities to act on the world, fostering the development of women’s empowerment, and create future women leaders and changemakers.
            </p>
          </div>
        </div>
        {/* PADILL SECTION */}
        <section className="wowmen-third">
          <div className="main">
            <img src="/images/wowmenAcademy/thirdSection/pink-background.png" alt="pink-background" className="background" />
            <div className="content">
              {thirdAsset.map(({ title, img}) => (
                <div className={title === 'about' ? 'about no-bg' : title} key={title}>
                  <img src={`/images/wowmenAcademy/thirdSection/${img}`} alt={title} className={`${title}-img`} />
                  {title.slice(0,2) !== 'ww' && (
                    <div className={`${title}-text`}>
                      {title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="value" className="detail-section value-section">
          <div className="detail-title">
            <img src="/images/wowmenAcademy/thirdSection/taro-pacman.svg" alt="value" className="values-img" />
            <div className="detail-text value-logo">
              Values
            </div>
          </div>
          {valueSectionAsset.map((props, key) => (
            <img key={key} { ...props} />
          ))}
        </section>
        <section id="vision" className="detail-section vision-section">
          <div className="detail-title vision-logo-title">
            <img src="/images/wowmenAcademy/thirdSection/orange-ellipse.svg" alt="value" className="values-img" />
            <div className="detail-text vision-logo">
              Vision
            </div>
          </div>
          <div className="section-title vision-title">
            <h5>All women have big dreams</h5>
            <h3>and so do we.</h3>
          </div>
          {Array.from(Array(4).keys()).map((item) => (
            <div key={item} className="circle" />
          ))}
          <div className="vision-board">
            {Array.from(Array(4).keys()).map((item) => (
              <div key={item} className="nail" />
            ))}
            {vision.map((item: string, idx: number) => (
              <div className="vision-item" key={idx}>
                <div className="vision-img">
                  <img
                    src="/images/wowmenAcademy/thirdSection/orange-flower.svg"
                    alt=""
                    className="orange-flower"
                  />
                  <div className="vision-num">{idx + 1}</div>
                </div>
                <div className="vision-desc">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="wowmen-learning">
          <h1>Our Learning Library</h1>
          <div className="wowmen-learning-content">
            {/* TODO: change attribute with fetched data or real data */}
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
