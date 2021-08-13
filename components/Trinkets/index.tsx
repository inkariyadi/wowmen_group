import React from 'react';

export interface Props {
  secondary?: boolean
}
 
const Trinkets : React.FC<Props> = ({ secondary }) => {
  let className = 'trinket-container';
  if (secondary) className += ' secondary';
  
  return (
    <div className={className}>
      <div className="trinket" />
      <div className="trinket" />
      <div className="trinket" />
      <div className="trinket" />
      <div className="trinket" />
      <div className="trinket" />
      <div className="trinket" />
    </div>
  );
};
 
export default Trinkets;