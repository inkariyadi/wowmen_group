// Import Modules
import React from 'react';

interface Props {
    title: string,
    desc: string,
    buttontxt: string,
    href: string,
}

const LibraryCard: React.FC<Props> = (props) => {
  const{
    title,
    desc,
    buttontxt,
    href,
  } = props;

  return(
    <div className="library-card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <a href={href} className="library-card-button">
        {buttontxt}
      </a>
    </div>
  );
};

export default LibraryCard;
