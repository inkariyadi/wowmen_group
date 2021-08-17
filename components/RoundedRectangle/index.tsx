// Import Modules
import React from 'react';

interface Props {
    type: ('pink-square' | 'green-rectangle' | 'yellow-circle-large' | 'yellow-circle-medium' | 'yellow-circle-small'),
}

const RoundedRectangle : React.FC<Props> = (props) => {
  const{
    type,
  } = props;

  return(
    <div className={type}></div>
  );
};

export default RoundedRectangle;
