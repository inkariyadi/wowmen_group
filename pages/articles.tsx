// Import Modules
import React, { useState } from 'react';

// Import Components
import Navbar from 'components/Navbar';
import LifestyleCard from 'components/LifestyleArticle';

// Import Interface
import Article from 'interface/Article';

// Import Utils
import { handleBrokenImg } from 'utils/string';
import ArticleCard from 'components/ArticleCard';

const Programs: React.FC = () => {
  const [topArticle] = useState<Article>({
    headline: '',
    body: '',
    image: '',
    date: '',
    writer: '',
  });

  const [lifestyleArticles] = useState<Article[]>([
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
  ]);
  
  const [helloThere] = useState<Article>(
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    }
  );

  const [newArticles] = useState<Article[]>([
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
    {
      headline: '',
      body: '',
      image: '',
      date: '',
      writer: '',
    },
  ]);

  return (
    <div className="article">
      <Navbar />
      <section className="article-first section-container">
        <h3 className="top-article-title">
          Top Article
        </h3>
        <div className="top-article-box">
          <h3 className="top-article-box-title">
            Top Article
          </h3>
          <div className="top-article-left">
            {topArticle?.image ? (
              <img src="" alt="" className="top-article-image" onError={handleBrokenImg} />
            ) : (
              <div className="top-article-image-dummy">
                <h5>Photo</h5>
              </div>
            )}
          </div>
          <div className="top-article-right">
            <h4 className="top-article-headline">
              {topArticle?.headline || 'Headline'}
            </h4>
            <p className="top-article-body">
              {topArticle?.body || 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '}
            </p>
          </div>
        </div>
      </section>
      <div className="tassel">
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle" />
      </div>
      <section className="article-second section-container">
        <h3 className="lifestyle-title">
          Lifestyle
        </h3>
        <div className="lifestyle-articles">
          <div className="lifestyle-articles-wrapper">
            {lifestyleArticles.map((article, idx) => (
              <div key={idx} className="lifestyle-articles-item">
                <LifestyleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="article-third section-container">
        <div className="hello-there-title">
          <div className="yellow-sun">
            <img src="/images/articles/yellow-sun.png" alt="yellow-sun" />
          </div>
          <div className="hello-there-title-text">
            <h4>Hello There!</h4> <br />
            <h4>{helloThere.headline || 'Headline'}</h4>
          </div>
        </div>
        <div className="hello-there-content">
          <div className="hello-there-wrapper">
            <div className="hello-there-image">
              <div className="decor">
                <img src="/images/articles/pink-star.png" alt="pink-star" className="pink-star" />
                <img src="/images/articles/orange-star.png" alt="orange-star" className="orange-star" />
                <img src="/images/articles/bluesky-star.png" alt="bluesky-star" className="bluesky-star" />
              </div>
              {helloThere?.image ? (
                <img src="" alt="" className="hello-there-image" onError={handleBrokenImg} />
              ) : (
                <div className="hello-there-image-dummy">
                  <h5>Photo</h5>
                </div>
              )}
            </div>
            <div className="hello-there-text">
              {helloThere.body || 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '}
            </div>
          </div>
        </div>
      </section>
      <section className="article-fourth section-container">
        <img src="/images/articles/virus.png" alt="virus" className="virus" />
        <h4 className="new-article-title">
          NEW ARTICLE
        </h4>
        <div className="new-article-box">
          <div className="new-article-wrapper">
            {newArticles.map((article, idx) => (
              <div key={idx} className="new-article-item">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default Programs;