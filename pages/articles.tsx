// Import Modules
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';


// Import Components
import LifestyleCard from 'components/LifestyleArticle';

// Import Interface
import Article from 'interface/Article';

// Import Utils
import { handleBrokenImg } from 'utils/string';
import ArticleCard from 'components/ArticleCard';
import { API_URL, getArticles, getLifestyleArticles, getTopArticle, getTopArticle2 } from 'utils/api';

const Programs: React.FC = () => {

  const [articles, setArticles] = useState<Article[]>();
  const [topArticle, setTopArticle] = useState<Article>();
  const [topArticle2, setTopArticle2] = useState<Article>();
  const [lifestyleArticles, setLifeStyleArticles] = useState<Article[]>();
  
  useEffect(()=>{
    getArticles()
      .then((res) => {
        const data:Article[] = res.data.map((value: Article) => ({
          id: value.id,
          headline: value.headline,
          content: value.content,
          updated_at: value.updated_at,
          image: value.image,
          member: value.member,
        }));
        setArticles(data);
        console.log('Success getting articles');
      })
      .catch(() => {
        console.log('Something wrong with getting articles');
      });
    
    getTopArticle()
      .then((res) => {
        const data = {
          id: res.data.id,
          headline: res.data.article.headline,
          content: res.data.article.content,
          updated_at: res.data.article.updated_at,
          image: res.data.article.image,
          member: res.data.article.member,
        };
        console.log(data);
        setTopArticle(data);
        console.log('Success getting top article');
      })
      .catch(() => {
        console.log('Something wrong with getting top article');
      });
      
    getTopArticle2()
      .then((res) => {
        const data = {
          id: res.data.id,
          headline: res.data.article.headline,
          content: res.data.article.content,
          updated_at: res.data.article.updated_at,
          image: res.data.article.image,
          member: res.data.article.member,
        };
        console.log(data);
        setTopArticle2(data);
        console.log('Success getting top article 2 ');
      })
      .catch(() => {
        console.log('Something wrong with getting top article 2');
      });
    
    getLifestyleArticles()
      .then((res) => {
        const data:Article[] = res.data.articles.map((value: Article) => ({
          id: value.id,
          headline: value.headline,
          content: value.content,
          updated_at: value.updated_at,
          image: value.image,
          member: value.member,
        }));
        setLifeStyleArticles(data);
        console.log('Success getting lifestyle articles');
        console.log(data);
      })
      .catch(() => {
        console.log('Something wrong with getting lifestyle articles');
      });
  },[]);
  
  return (
    <div>
      
      <div className="article">
        <section className="article-first section-container">
          <h3 className="top-article-title">
          Top Article
          </h3>
          <div className="top-article-box">
            <h3 className="top-article-box-title">
            Top Article
            </h3>
            <div className="top-article-left">
              {articles && articles[0].image ? (
                <div style={{'maxWidth':'100%','minHeight':'400px','height':'100%','position':'relative'}}>
                  <Image
                    src={articles[0].image.url}
                    alt="Picture of the articles"
                    layout="fill"
                    objectFit="cover"
                    className="top-article-image" 
                    onError={handleBrokenImg}
                  />
                </div>
              ) : (
                <div className="top-article-image-dummy">
                  <h5>image</h5>
                </div>
              )}
            </div>
            <div className="top-article-right">
              <h4 className="top-article-headline">
                {topArticle && topArticle.headline || 'Headline'}
              </h4>
              <p className="top-article-body">
                {topArticle ? <Markdown>{topArticle.content}</Markdown> : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '}
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
              {lifestyleArticles?.map((article, idx) => (
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
              <h4>{topArticle2?.headline || 'Headline'}</h4>
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
                {topArticle2?.image ? (
                  <div style={{'maxWidth':'100%','minHeight':'400px','height':'100%','position':'relative'}}>
                    <Image
                      src={topArticle2.image.url}
                      alt="Picture of the articles"
                      layout="fill"
                      objectFit="cover"
                      className="hello-there-image" 
                      onError={handleBrokenImg}
                    />
                  </div>
                ) : (
                  <div className="hello-there-image-dummy">
                    <h5>image</h5>
                  </div>
                )}
              </div>
              <div className="hello-there-text">
                {topArticle2?.content || 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '}
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
              {articles?.map((article: Article) => (
                <div key={article.id} className="new-article-item">
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};
 
export default Programs;
