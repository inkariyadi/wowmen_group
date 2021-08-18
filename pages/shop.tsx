// Import Modules
import React, { useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel';
import Head from 'next/head';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

// Import Components
import ProductCard from 'components/ProductCard';
import Trinkets from 'components/Trinkets';
import OrderForm from 'components/OrderForm';

// Import Interface
import Product from 'interface/Product';
import OrderData from 'interface/OrderData';

//Import API
import { getMerchandises } from 'utils/api';

const carouselProps = (color: string) => ({
  stopAutoPlayOnHover: true,
  indicators: false,
  navButtonsWrapperProps: {
    style: {
      top: -8,
    },
  },
  navButtonsAlwaysVisible: true,
  navButtonsProps: {
    style: {
      backgroundColor: color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  PrevIcon: <ArrowBackIos className="nav-btn" />,
  NextIcon: <ArrowForwardIos className="nav-btn" />,
});

function Shop () {
  const [firstMerch, setFirstMerch] = useState<Product>({
    id: 1,
    name: 'Merch 1',
    num: 0,
    price: 300000,
    category: 'Food',
    isLocalBrand: false,
  });
  const [secondMerch, setSecondMerch] = useState<Product>({
    id: 2,
    name: 'Merch 2',
    num: 0,
    price: 300000,
    category: 'Food',
    isLocalBrand: false,
  });
  const [firstLocal, setFirstLocal] = useState<Product>({
    id: 3,
    name: 'Local 1',
    num: 0,
    price: 300000,
    category: 'Food',
    isLocalBrand: false,
  });
  const [secondLocal, setSecondLocal] = useState<Product>({
    id: 4,
    name: 'Merch 2',
    num: 0,
    price: 300000,
    category: 'Food',
    isLocalBrand: false,
  });
  
  const [merchandise,setMerchandise] = useState<Product[]> ([]);
 
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
  
  useEffect(()=>{
    getMerchandises()
      .then((res) => {
        const data = res.data.map((value: Product) => ({
          id: value.id,
          name: value.name.toString(),
          num: 0,
          price: value.price,
          category: value.category.toString(),
          isLocalBrand: value.isLocalBrand,
        }));
        
        setMerchandise(data);
        console.log(merchandise);
        console.log('Success getting merchandises');
      })
      .catch(() => {
        console.log('Something wrong with getting merchandises');
      });
  },[]);
  
  useEffect(()=> {
    
    console.log(merchandise);
  },[merchandise]);

  return (
    <>
      <Head>
        <title>Wowmen Academy | Shop</title>
      </Head>
      <div className="shop">
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
            <Carousel { ...carouselProps('rgba(9, 13, 84, .4)') }>
              <div className="our-merchandise-left">
                {merchandise.filter((value:Product) => !value.isLocalBrand).map((value: Product) => (
                  <div className="our-merchandise-left-item" key={value.id}>
                    <ProductCard
                      id={value.id}
                      name={value.name}
                      num={value.num}
                      price={value.price}
                      category={value.category}
                      merchandise={merchandise}
                      setMerchandise={setMerchandise} />
                  </div>
                ))}
              </div>
            </Carousel>
            <div className="our-merchandise-right">
              <OrderForm
                productList={merchandise.filter(({ num,isLocalBrand }) => num > 0 && !isLocalBrand)}
                orderData={merchData}
                setOrderData={setMerchData}
              />
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
              <Carousel { ...carouselProps('rgba(226, 142, 181, .4)') }>
                <div className="our-merchandise-left">
                  {merchandise.filter((value:Product) => value.isLocalBrand).map((value: Product) => (
                    <div className="our-merchandise-left-item" key={value.id}>
                      <ProductCard
                        secondary
                        id={value.id}
                        name={value.name}
                        num={value.num}
                        price={value.price}
                        category={value.category}
                        merchandise={merchandise}
                        setMerchandise={setMerchandise} />
                    </div>
                  ))}
                </div>
              </Carousel>
            </div>
            <div className="our-merchandise-right">
              <OrderForm
                productList={merchandise.filter(({ num,isLocalBrand }) => num > 0 && isLocalBrand)}
                orderData={localData}
                setOrderData={setLocalData}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Shop;
