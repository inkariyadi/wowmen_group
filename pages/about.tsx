// Import Modules
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';

function About () {
  const pilars = [
    {src: 'images/about/content-pilar-1.svg', name: 'content pillars 1'},
    {src: 'images/about/content-pilar-2.svg', name: 'content pillars 2'},
    {src: 'images/about/content-pilar-3.svg', name: 'content pillars 3'},
    {src: 'images/about/content-pilar-4.svg', name: 'content pillars 4'},
  ];
  const products = [
    {src: 'images/about/youtube.svg', name: 'youtube'},
    {src: 'images/about/instagram.svg', name: 'instagram'},
    {src: 'images/about/program.svg', name: 'programs'},
  ];
  const [teams, setTeams] = useState([
    {
      hover: false,
      src: 'images/about/ceo-1.svg', 
      name: 'Syahrani Thomasri', 
      position: 'Founder & CEO of Wowmen Group (Lead of Wowmen Group Media)',
      desc: 'Hi! I am Caca. I am currently a student at School of Business and Management ITB and Hull University UK, majoring in International Business and Financial Management. I am very passionate about education and learning is inevitable for me. I tried to create a better platform of learning in Indonesia, therefore I and my team created several businesses and communities in that area, which are Wowmen Group and Logika Creative. I also Co-founded Mimpi Muda when she was in High School that aimed to give Jakarta’s youths a platform to share their thoughts regarding education and social issues.I am also the senior copywriter of Relearn Indonesia. I have my own vision for herself and the people around her, therefore She’s become very ambitious to create a better and better platform for Indonesia.',
    },
    {
      hover: false,
      src: 'images/about/ceo-2.svg', 
      name: 'Moza Abel', 
      position: 'Co-Founder & Co-CEO Wowmen Group (Lead of Wowmen Academy)',
      desc: 'Hello, I\'m Abel, an undergraduate student majoring in Management at the University of Indonesia. I\'m a passionate learner that likes to explore new things and develop myself both personally and professionally. Being a part of Wowmen Group from the start was one of the best decisions I\'ve ever made. Building Wowmen Group together with other great women enhances my willingness to learn and grow with them. Currently, we also building Wowmen Academy, which hopefully can also develop and educate people through the contents and programs that we have.',
    },
  ]);
  const onHover = (index: any) => {
    const list = [...teams];
    list[index].hover = true;
    setTeams(list);
  };
  const onLeave = (index: any) => {
    const list = [...teams];
    list[index].hover = false;
    setTeams(list);
  };
  return(
    <>
      <Head>
        <title>Wowmen Academy | About Us</title>
      </Head>
      <Navbar/>
      <div className="about">
        <div className="about-top">
          <img src="images/about/big-pink-yellow-flowers.svg" alt="big-pink-yellow-flowers" />
          <div className="about-top-desc">
            <h1>About</h1>
            <h1>Wowmen Group</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div className="about-second">
          <img src="images/about/background.svg" alt="background" />
          <div className="about-second-content">
            <div className="about-second-content-title">
              <h1>Our</h1>
              <h1>Vision</h1>
              <p>and</p>
              <h1>Goals</h1>
              <img src="images/about/right-star.svg" alt="right-star" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>
        </div>
        <div className="about-third">
          <div className="about-third-title">
            <div className="triangle-up"></div>
            <h2>Content Pillars and Product</h2>
            <div className="triangle-up"></div>
          </div>
          <div className="about-third-pilars">
            {/* TODO: change href with real data */}
            {pilars.map(({ src, name }) => (
              <a key={name} className="about-third-pilars-item" href="/">
                <img src={src} alt={name}/>
                <p>{name}</p>
              </a>
            ))}
          </div>
          <div className="about-third-products">
            {/* TODO: change href with real data */}
            {products.map(({ src, name }) => (
              <a key={name} className="about-third-products-item" href="/">
                <img src={src} alt={name}/>
                <p>{name}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="about-last">
          <div className="about-last-title">
            <h2>Our Team</h2>
            <img src="images/about/mountain-star.svg" alt="mountain star" />
          </div>
          <div className="about-last-content">
            {/* TODO: change with real data */}
            {teams.map(({ src, name, position, desc, hover }, i) => (
              <div 
                key={name} 
                className="about-last-content-item"
                onMouseEnter={e => onHover(i)}
                onMouseLeave={e => onLeave(i)}>
                {hover?
                  <p className="about-last-content-item-desc">{desc}</p>
                  :
                  <img src={src} alt={name}/>
                }
                <h6>{name}</h6>
                <p className="about-last-content-item-position">{position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
   
  );
}

export default About;
