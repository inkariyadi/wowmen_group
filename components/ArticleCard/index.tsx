// Import Modules
import React from 'react';
import moment from 'moment';

// Import Component
import Article from 'interface/Article';

// Import Utils
import { handleBrokenImg } from 'utils/string';
import { API_URL } from 'utils/api';

export interface Props {
  article: Article,
}
 
const ArticleCard: React.SFC<Props> = (props) => {
  const { article } = props;
  
  const {
    headline,
    updated_at,
    image,
  } = article;

  return (
    <div className="article-card">
      <div className="article-card-image">
        <img src={image.url} alt="article-image" onError={handleBrokenImg} />
      </div>
      <h5 className="article-card-headline">
        {headline || 'XXXXXX'}
      </h5>
      <hr />
      <div className="article-card-date">
        {moment(updated_at).format('ll')}
      </div>
    </div>
  );
};
 
export default ArticleCard;