// Import Modules
import React from 'react';

interface Props {
    type: ('pink-square' | 'green-rectangle' | 'yellow-circle-large' | 'yellow-circle-medium' | 'yellow-circle-small'),
    imageSRC?: 'images/about/ceo-1.svg',
    imageALT?: 'gambar',
    href?: '/',
}

const RoundedRectangle : React.FC<Props> = (props) => {
  const{
    type,
    imageSRC,
    imageALT,
    href,
  } = props;

  return(
    <a className={type} href={href}>
      <img src={imageSRC} alt={imageALT}/>
    </a>
  );
};

export default RoundedRectangle;
