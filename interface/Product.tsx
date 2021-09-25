interface Product {
  id: number,
  name: string,
  num: number,
  price: number,
  category: string,
  image? : string,
  isLocalBrand: boolean,
}

export default Product;
