import { useState, useEffect } from "react";

//assets
import ProductThumb from '../assets/home-slide-1.jpeg';
import ProductImage1 from '../assets/home-slide-2.jpeg';
import ProductImage2 from '../assets/home-slide-3.jpeg';
import ProductImage3 from '../assets/home-slide-4.jpeg';
import ProductImage4 from '../assets/home-slide-5.jpeg';
import ProductImage5 from '../assets/home-slide-6.jpeg';

export default function useFetchProducts({ quantity = 3, itemId }) {
   const [products, setProducts] = useState([]);

   const idNumber = parseInt(itemId)

   useEffect(() => {
      let fetchProducts = Array.from({ length: quantity }, (_, index) => ({
         id: 1,
         thumb: ProductThumb,
         images: [
            { src: ProductImage1 },
            { src: ProductImage2 },
            { src: ProductImage3 },
            { src: ProductImage4 },
            { src: ProductImage5 },
         ],
         name: 'K-Swiss V8 - Masculino',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
         ref: '38416711',
         avaregeRate: 4.7,
         countRates: 90,
         colors: [
            '#6FEEFF',
            '#FF6969',
            '#5E5E5E',
            '#6D70B7'
         ],
         sizes: [39, 40, 41, 42, 43],
         price: 219.00,
         priceDiscount: '$100',
         offer: '30% OFF',
         category: 'Tênis',
         group: 'casual',
         branding: 'Nike'
      }));

      if (idNumber) {
         fetchProducts = fetchProducts.find(({ id }) => id === idNumber)
      }

      setProducts(fetchProducts);
   }, [quantity, itemId]);

   return { products };
}
