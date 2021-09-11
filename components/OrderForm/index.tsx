// Import Modules
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';

// Import Interface
import Product from 'interface/Product';
import OrderData from 'interface/OrderData';

// Import Utils
import { validEmail } from 'utils/string';

// Import API
import { postMerchandiseOrder } from 'utils/api';

interface Props {
  productList: Product[],
  orderData: OrderData,
  setOrderData: Dispatch<SetStateAction<OrderData>>
}
 
const OrderForm : React.FC<Props> = (props) => {
  const {
    productList,
    orderData,
    setOrderData,
  } = props;

  const {
    fullName,
    fullAddress,
    email,
    phoneNumber,
  } = orderData;

  const [emailHelper, setEmailHelper] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (email) {
      if (!validEmail(email)) setEmailHelper('Email is not valid!');
      else setEmailHelper('');
    } else setEmailHelper('');
  }, [email]);
  
  const countTotal = () => {
    let total = 0;
    
    productList.forEach((value)=>{
      total+=value.price * value.num;
    });
    
    return total;
  };
  
  const handleSubmit = () => {
    postMerchandiseOrder({
      name: fullName,
      email: email,
      address: fullAddress,
      phone_number: phoneNumber,
      merchandises: productList.map((value) => ({
        qty: value.num,
        price: value.price,
        product: value.name,
      })),
    }).then(()=>console.log('berhasil')).catch(()=>console.log('gagal'));
  };

  return (
    <div className="order-form">
      <div className="order-form-input">
        <label>FullName</label>
        <input name="fullName" value={fullName} onChange={handleChange} />
        <label>Email</label>{Boolean(emailHelper) && <span className="helper-text">{emailHelper}</span>}
        <input name="email" value={email} onChange={handleChange} />
        <label>Full Address</label>
        <input name="fullAddress" value={fullAddress} onChange={handleChange} />
        <label>Phone Number</label>
        <input name="phoneNumber" value={phoneNumber} onChange={handleChange} />
      </div>
      <div className="order-form-summary">
        <h6>Order Summary</h6>
        <table>
          <thead>
            <tr>
              <td><span className="order-form-column">No</span></td>
              <td><span className="order-form-column">Items</span></td>
              <td><span className="order-form-column">Price</span></td>
              <td><span className="order-form-column">Qty</span></td>
              <td><span className="order-form-column">Subtotal</span></td>
            </tr>
            <tr>
              <td colSpan={5}><hr /></td>
            </tr>
            {productList.map((product: Product, idx: number) => (
              <tr key={idx}>
                <td>{idx+1}</td>
                <td>{product.name}</td>
                <td>
                  <NumberFormat
                    displayType="text"
                    value={product.price}
                    prefix="Rp"
                    decimalSeparator=","
                    thousandSeparator="."
                  />
                </td>
                <td>{product.num}</td>
                <td>
                  <NumberFormat
                    displayType="text"
                    value={product.num * product.price}
                    prefix="Rp"
                    decimalSeparator=","
                    thousandSeparator="."
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={5}><hr /></td>
            </tr>
          </thead>
        </table>
        <div className="order-form-total">
          <h6>Total</h6>
          <NumberFormat
            displayType="text"
            value={countTotal()}
            prefix="Rp"
            decimalSeparator=","
            thousandSeparator="."
          />
          <button onClick={handleSubmit} className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default OrderForm ;
