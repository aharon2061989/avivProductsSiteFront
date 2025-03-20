import React from 'react';
import './ProductList2.css';

const products = [
  {id: 1, name: "קוקטייל ציפור קריסטל 200 מ'ל", price: "50 ₪", imageUrl: "/photos/img1.jpg"},
  {id: 2, name: "קוקטייל שופר זכוכית 410 מ'ל", price: "50 ₪", imageUrl: "/photos/img14.jpg"},
  {id: 3, name: "קוקטייל גלובוס זכוכית 330 מ'ל", price: "50 ₪", imageUrl: "/photos/img13.jpg"},
  {id: 4, name: "קוקטייל פטריה זכוכית 270 מ'ל", price: "50 ₪", imageUrl: "/photos/img4.jpg"},
  {id: 5, name: "קוקטייל נבל זכוכית 190 מ'ל", price: "50 ₪", imageUrl: "/photos/img2.jpg"},
  {id: 6, name: "קוקטייל נבל זכוכית 340 מ'ל", price: "50 ₪", imageUrl: "/photos/img11.jpg"},
  {id: 7, name: "קוקטייל דובי זכוכית 320 מ'ל", price: "50 ₪", imageUrl: "/photos/img9.jpg"},
  {id: 8, name: "קוקטייל מרטיני זכוכית 230 מ'ל", price: "50 ₪", imageUrl: "/photos/img12.jpg"},
  {id: 9, name: "כוס יין מעוצבת זכוכית 450 מ'ל", price: "50 ₪", imageUrl: "/photos/img8.jpg"}
];

const ProductList2 = () => {
  return (
    <div className='productsGrid'>
      {products.map((product) => (
        <div key={product.id} className="productCard">
          <img src={product.imageUrl} alt={product.name} className="productImage" />
          <h1 className="productName">{product.name}</h1>
          <p className="productPrice"><b>{product.price}</b></p>
        </div>
      ))}
    </div>
  );
};

export default ProductList2;
