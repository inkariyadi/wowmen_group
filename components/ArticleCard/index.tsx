// Import Modules
import React from 'react';
import moment from 'moment';

// Import Component
import Article from 'interface/Article';

// Import Utils
import { handleBrokenImg } from 'utils/string';

export interface Props {
  article: Article,
}
 
const ArticleCard: React.SFC<Props> = (props) => {
  const { article } = props;
  
  const {
    headline,
    date,
  } = article;

  return (
    <div className="article-card">
      <div className="article-card-image">
        <img src="" alt="article-image" onError={handleBrokenImg} />
      </div>
      <h5 className="article-card-headline">
        {headline || 'XXXXXX'}
      </h5>
      <hr />
      <div className="article-card-date">
        {moment(date).format('ll')}
      </div>
    </div>
  );
};
 
export default ArticleCard;