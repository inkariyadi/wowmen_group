// Import Modules
import React from 'react';

// Import Components
import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

const Shop: React.FC = () => {
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
        <h4>Our <br /> Merhandise</h4>
        <div className="our-merchandise">
          <div className="our-merchandise-left">
            <div>
              <ProductCard
                productName="Nama Produk 1"
                productCategory="Category"
                productNum={999}
                productPrice={300000}  
              />
            </div>
            <div>
              <ProductCard
                secondary
                productName="Nama Produk 1"
                productCategory="Category"
                productNum={999}
                productPrice={300000}  
              />
            </div>
          </div>
          <div className="our-merchandise-left">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;