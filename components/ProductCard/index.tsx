// Import Modules
import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { BiMinus } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import NumberFormat from 'react-number-format';

interface Props {
  productImage?: string,
  productName: string,
  productNum: number,
  productPrice: number,
  productCategory: string,
  secondary?: boolean,
}

const ProductCard : React.FC<Props> = (props) => {
  const {
    productImage,
    productName,
    productNum,
    productPrice,
    productCategory,
    secondary,
  } = props;

  const [num, setNum] = useState(productNum);

  const handleSubstract = () => {
    setNum(num > 0 ? num - 1 : num);
  };

  const handleAdd = () => {
    setNum(num + 1);
  };

  let className = 'product-card';

  if (secondary) className += ' secondary';

  return (
    <div className={className}>
      <img className="product-card-image" src={productImage || '/images/shop/product-image.png' } />
      <div className="product-card-detail">
        <div className="product-card-name">
          {productName}
        </div>
        <div className="product-card-second-row">
          <div className="product-card-price">
            <NumberFormat
              displayType="text"
              value={productPrice}
              prefix="Rp"
              decimalSeparator=","
              thousandSeparator="."
            />
          </div>
          <div className="product-card-category">
            <div className="value">{productCategory}</div>
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