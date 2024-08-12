import ProductListing from "./ProductListing";

//assets 
import ProductImage from '../assets/produc-image-5.jpeg'

export default function HomeProducts() {

   const products = Array.from({ length: 8 }, () => ({
      image: ProductImage,
      name: 'K-Swiss V8 - Masculino',
      price: '$200',
      priceDiscount: '$100',
      offer: '30% OFF',
      category: 'Tênis',
   }));

   console.log(products);


   return (
      <ProductListing
         products={products}
      />
   )
}