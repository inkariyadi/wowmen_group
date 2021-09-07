// Import Modules
import React from 'react';

interface Props {
    type: ('pink-square' | 'green-rectangle' | 'yellow-circle'),
    imageSRC?: string,
    imageALT?: string,
    href?: string,
}

const RoundedRectangle : React.FC<Props> = (props) => {
  const{
    type,
    imageSRC = 'images/about/ceo-1.svg',
    imageALT = 'gambar',
    href = '/',
  } = props;

  const styling = `rounded-rectangle ${type}`;

  return(
    <a className={styling} href={href}>
      <img className="rounded-rectangle-image" src={imageSRC} alt={imageALT}/>
    </a>
  );
};

export default RoundedRectangle;
