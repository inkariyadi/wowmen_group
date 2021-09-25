// Import Modules
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


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
    const data = {
      name: fullName,
      email: email,
      address: fullAddress,
      phone_number: parseInt(phoneNumber),
      merchandises: productList.map((value) => ({
        qty: value.num,
        price: value.price,
        product: value.name,
      })),
    };
    postMerchandiseOrder(data)
      .then(()=>{
        console.log('berhasil');
        setIsSuccess(true);
      })
      .catch((err)=>{
        console.log(err);
        console.log('gagal');
        setIsSuccess(false);
      })
      .finally(()=>{
        setIsOpenSnackbar(true);
      });
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
        <input type="number" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
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
      <Snackbar open={isOpenSnackbar} autoHideDuration={2000} onClose={() => setIsOpenSnackbar(false)}>
        <Alert onClose={() => setIsOpenSnackbar(false)} severity={isSuccess ? 'success' : 'error'} >
          {isSuccess ? 'Succesfully order' : 'Order failed. Please try again'}
        </Alert>
      </Snackbar>
    </div>
  );
};
 
export default OrderForm ;
