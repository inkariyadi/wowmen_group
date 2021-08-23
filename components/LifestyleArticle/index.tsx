// Import Modules
import React from 'react';
import moment from 'moment';
import 'moment/locale/id';

// Import Components
import Article from 'interface/Article';

// Import Utils
import { handleBrokenImg } from 'utils/string';

export interface Props {
  article: Article,
}
 
const LifestyleCard: React.FC<Props> = (props) => {
  const { article } = props;

  const {
    headline,
    image,
    date,
    writer,
  } = article;
  
  return (
    <div className="lifestyle-card">
      <div className="lifestyle-card-img-wrapper">
        <img src="/images/articles/yellow-star.png" alt="lifestyle" className="lifestyle-card-img-placeholder" />
        <img
          alt="lifestyle"
          className="lifestyle-card-img"
          onError={handleBrokenImg}
          src={image}
        />
      </div>
      <div className="lifestyle-card-headline">
        <h4>{headline || 'Headline'}</h4>
      </div>
      <div className="lifestyle-card-desc">
        <p>
          {`${moment(date).format('ll')}/${writer || 'Unknown'}`}
        </p>
      </div>
    </div>
  );
};
 
export default LifestyleCard;