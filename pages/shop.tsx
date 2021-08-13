// Import Modules
import React, { useState} from 'react';

// Import Components
import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';
import Trinkets from 'components/Trinkets';
import OrderForm from 'components/OrderForm';

// Import Interface
import Product from 'interface/Product';
import OrderData from 'interface/OrderData';

const Shop: React.FC = () => {
  const [firstMerch, setFirstMerch] = useState<Product>({
    name: 'Merch 1',
    num: 0,
    price: 300000,
    category: 'Food',
  });
  const [secondMerch, setSecondMerch] = useState<Product>({
    name: 'Merch 2',
    num: 0,
    price: 300000,
    category: 'Food',
  });
  const [firstLocal, setFirstLocal] = useState<Product>({
    name: 'Local 1',
    num: 0,
    price: 300000,
    category: 'Food',
  });
  const [secondLocal, setSecondLocal] = useState<Product>({
    name: 'Merch 2',
    num: 0,
    price: 300000,
    category: 'Food',
  });

  const [merchData, setMerchData] = useState<OrderData>({
    fullName: '',
    fullAddress: '',
    email: '',
    phoneNumber: '',
  });

  const [localData, setLocalData] = useState<OrderData>({
    fullName: '',
    fullAddress: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <>
      <Navbar />
      <section className="shop-first section-container pt">
        <div className="its-time">
          <h1 className="its-time-title">It&apos; s time</h1>
          <span className="its-time-for-shopping">
            <h2>For Shopping!</h2>
          </span>
          <img className="polkadot-green-bag" src="/images/shop/polkadot-green-basket.svg" />
        </div>
      </section>
      <div className="triangle-page-limit">
        <div className="triangle" />
        <div className="triangle" />
        <div className="triangle" />
        <div className="triangle" />
      </div>
      <section className="shop-second section-container">
        <Trinkets />
        <h4>Our <br /> Merhandise</h4>
        <div className="our-merchandise">
          <div className="our-merchandise-left">
            <div>
              <ProductCard
                name={firstMerch.name}
                num={firstMerch.num}
                price={firstMerch.price}
                category={firstMerch.category}
                setProduct={setFirstMerch}
              />
            </div>
            <div>
              <ProductCard
                name={secondMerch.name}
                num={secondMerch.num}
                price={secondMerch.price}
                category={secondMerch.category}
                setProduct={setSecondMerch}
              />
            </div>
          </div>
          <div className="our-merchandise-right">
            <OrderForm
              productList={[firstMerch, secondMerch].filter(({ num }) => num > 0)}
              orderData={merchData}
              setOrderData={setMerchData}
            />
          </div>
        </div>
        <div className="i-love-shopping">
          <img className="i-love-shopping-image" src="/images/shop/orange-flower.png" />
          <div className="i-love-shopping-text">
            <h5>i love <br /> shopping!~</h5>
            <img src="/images/shop/outline-love.png" />
            <img src="/images/shop/outline-love.png" />
            <img src="/images/shop/outline-love.png" />
          </div>
        </div>
      </section>
      <section className="shop-third section-container">
        <Trinkets secondary />
        <img className="kwetiau-img" src="/images/shop/kwetiau-img.png" alt="kwetiau"/>
        <div className="local-brand">
          <h3>Local Brand</h3>
          <img src="/images/shop/eyeball.png" alt="eyeball" />
        </div>
        <h2 className="products">Products</h2>
        <div className="our-merchandise">
          <div className="our-merchandise-left">
            <img className="kwetiau-img" src="/images/shop/kwetiau-img.png" alt="kwetiau"/>
            <img className="kwetiau-img" src="/images/shop/kwetiau-img.png" alt="kwetiau"/>
            <div>
              <ProductCard
                secondary
                name={firstLocal.name}
                num={firstLocal.num}
                price={firstLocal.price}
                category={firstLocal.category}
                setProduct={setFirstLocal}
              />
            </div>
            <div>
              <ProductCard
                secondary
                name={secondLocal.name}
                num={secondLocal.num}
                price={secondLocal.price}
                category={secondLocal.category}
                setProduct={setSecondLocal}
              />
            </div>
          </div>
          <div className="our-merchandise-right">
            <OrderForm
              productList={[firstLocal, secondLocal].filter(({ num }) => num > 0)}
              orderData={merchData}
              setOrderData={setMerchData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;