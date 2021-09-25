// Import Modules
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';

// Import Components
import Article from 'interface/Article';

// Import Utils
import { handleBrokenImg } from 'utils/string';
import { API_URL, getMemberById } from 'utils/api';

export interface Props {
  article: Article,
}
 
const LifestyleCard: React.FC<Props> = (props) => {
  const { article } = props;
  const [ writerName, setWriterName] = useState('');

  const {
    headline,
    image,
    updated_at,
    member,
  } = article;
  
  useEffect(()=> {
    if(member){
      getMemberById(member)
        .then((res) => {
          console.log(res.data.name);
          setWriterName(res.data.name);
        });
    }
  },[]);

  
  return (
    <div className="lifestyle-card">
      <div className="lifestyle-card-img-wrapper">
        <img src="/images/articles/yellow-star.png" alt="lifestyle" className="lifestyle-card-img-placeholder" />
        <img
          alt="lifestyle"
          className="lifestyle-card-img"
          onError={handleBrokenImg}
          src={API_URL + image.url}
        />
      </div>
      <div className="lifestyle-card-headline">
        <h4>{headline || 'Headline'}</h4>
      </div>
      <div className="lifestyle-card-desc">
        <p>
          {`${moment(updated_at).format('ll')}/${writerName}`}
        </p>
      </div>
    </div>
  );
};
 
export default LifestyleCard;