// Import Modules
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { BiMinus } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import NumberFormat from 'react-number-format';

// Import Interface
import Product from 'interface/Product';

interface Props {
  id: number,
  image?: string,
  name: string,
  num: number,
  price: number,
  category: string,
  secondary?: boolean,
  merchandise: Product[],
  setMerchandise: Dispatch<SetStateAction<Product[]>>,
}

const ProductCard : React.FC<Props> = (props) => {
  const {
    id,
    image,
    name,
    num,
    price,
    category,
    secondary,
    merchandise,
    setMerchandise,
  } = props;

  let className = 'product-card';
  const [qty,setQty] = useState(num);

  if (secondary) className += ' secondary';
  
  useEffect(() => {
    setMerchandise(
      merchandise.map(product =>
        product.id === id ? { ...product, num: qty } : product
      )
    );
    console.log(qty);
  }, [qty]);

  const handleAdd = () => {
    if(qty<10){
      setQty(qty+1);
    }
  };

  const handleSubstract = () => {
    if(qty>0){
      setQty(qty-1);
    }
  };

  return (
    <div className={className}>
      <img className="product-card-image" src={image || '/images/shop/product-image.png' } />
      <div className="product-card-detail">
        <div className="product-card-name">
          {name}
        </div>
        <div className="product-card-second-row">
          <div className="product-card-price">
            <NumberFormat
              displayType="text"
              value={price}
              prefix="Rp"
              decimalSeparator=","
              thousandSeparator="."
            />
          </div>
          <div className="product-card-category">
            <div className="value">{category}</div>
            <div className="drop-btn">
              <AiFillCaretDown />
            </div>
          </div>
        </div>
        <div className="product-card-num">
          <span className="min-btn" onClick={handleSubstract}>
            <BiMinus />
          </span>
          <span className="value">
            {num}
          </span>
          <span className="max-btn" onClick={handleAdd}>
            <GrAdd />
          </span>
        </div>
      </div>
    </div>
  );
};
 
export default ProductCard;
