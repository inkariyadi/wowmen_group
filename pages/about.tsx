// Import Modules
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Import Interface
import Member from 'interface/Member';
import { API_URL, getMembers } from 'utils/api';

function About () {
  const pilars = [
    {src: 'images/about/content-pilar-1.svg', name: 'content pillars 1', href:'/'},
    {src: 'images/about/content-pilar-2.svg', name: 'content pillars 2', href:'/'},
    {src: 'images/about/content-pilar-3.svg', name: 'content pillars 3', href:'/'},
    {src: 'images/about/content-pilar-4.svg', name: 'content pillars 4', href:'/'},
  ];
  const products = [
    {src: 'images/about/youtube.svg', name: 'youtube', href:'/'},
    {src: 'images/about/instagram.svg', name: 'instagram', href:'/'},
    {src: 'images/about/program.svg', name: 'programs', href:'/'},
  ];
  const [hoverIdx, setHoverIdx] = useState(-1);

  const [members,setMembers] = useState<Member[]> ([]);
  function compare( a: Member, b :Member) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
  }
  
  
  useEffect(()=>{
    getMembers()
      .then((res) => {
        const data = res.data.map((value: Member) => ({
          id: value.id,
          name: value.name,
          title: value.title,
          photo: {
            url: value.photo.url,
            width: value.photo.width,
            height: value.photo.height,
          },
          description: value.description,
        }));
        
        setMembers(data.sort(compare));
        console.log('Success getting members');
      })
      .catch(() => {
        console.log('Something wrong with getting members');
      });
  },[]);
  
  const onHover = (index: number) => {
    setHoverIdx(index);
  };
  const onLeave = () => {
    setHoverIdx(-1);
  };
  
  return(
    <>
      <Head>
        <title>Wowmen Academy | About Us</title>
      </Head>
      <div className="about">
        <section className="about-top">
          <img src="images/about/big-pink-yellow-flowers.svg" alt="big-pink-yellow-flowers" />
          <div className="about-top-desc">
            <h1>About</h1>
            <h1>Wowmen Group</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
          </div>
        </section>
        <section className="about-second">
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
        </section>
        <section className="about-third">
          <div className="about-third-title">
            <div className="triangle-up"></div>
            <h2 className="large-screen">Content Pillars and Product</h2>
            <h2 className="small-screen">Content Pillars</h2>
            <div className="triangle-up"></div>
          </div>
          <div className="about-third-pilars">
            {/* TODO: change attribute with fetched data */}
            {pilars.map(({ src, name, href }) => (
              <a key={name} className="about-third-pilars-item" href={href}>
                <img src={src} alt={name}/>
                <p>{name}</p>
              </a>
            ))}
          </div>
          <div className="about-third-title small-screen">
            <div className="triangle-up"></div>
            <h2>Product</h2>
            <div className="triangle-up"></div>
          </div>
          <div className="about-third-products">
            {/* TODO: change attribute with fetched data */}
            {products.map(({ src, name, href }) => (
              <a key={name} className="about-third-products-item" href={href}>
                <img src={src} alt={name}/>
                <p>{name}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="about-last">
          <div className="about-last-title">
            <h2>Our Team</h2>
            <img src="images/about/mountain-star.svg" alt="mountain star" />
          </div>
          <div className="about-last-content">
            {members.map(value =>(
              <div 
                key={value.id} 
                className="about-last-content-item"
                onMouseEnter={() => onHover(value.id)}
                onMouseLeave={onLeave}>
                {hoverIdx==value.id?
                  <p className="about-last-content-item-desc">{value.description}</p>
                  :
                  <Image
                    src={value.photo.url}
                    alt="Picture of the author"
                    width={220}
                    height={228}
                  />
                }
                <h6>{value.name}</h6>
                <p className="about-last-content-item-position">{value.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
   
  );
}

export default About;
