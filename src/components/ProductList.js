import React, { useState } from 'react';
import './ProductList.css';

const products = [
  {id: 1, name: "קוקטייל ציפור קריסטל 200 מ'ל", price: "₪ 25", imageUrl: "/photos/img1.jpg"},
  {id: 2, name: "קוקטייל שופר זכוכית 410 מ'ל", price: "אזל מהמלאי", imageUrl: "/photos/img21.jpg"},
  {id: 3, name: "קוקטייל גלובוס זכוכית 330 מ'ל", price: "₪ 37", imageUrl: "/photos/img14.jpg"},
  {id: 4, name: "קוקטייל פטריה זכוכית 270 מ'ל", price: "₪ 27", imageUrl: "/photos/img4.jpg"},
  {id: 5, name: "קוקטייל ג'יני זכוכית 190 מ'ל", price: "₪ 31", imageUrl: "/photos/img2.jpg"},
  {id: 6, name: "קוקטייל ג'יני זכוכית 340 מ'ל", price: "₪ 34", imageUrl: "/photos/img11.jpg"},
  {id: 7, name: "קוקטייל דובי זכוכית 320 מ'ל", price: "₪ 27", imageUrl: "/photos/img19.jpg"},
  {id: 8, name: "קוקטייל חצי לב זכוכית 230 מ'ל", price: "₪ 32", imageUrl: "/photos/img15.jpg"},
  {id: 9, name: "כוס יין מעוצבת זכוכית 450 מ'ל", price: "₪ 43", imageUrl: "/photos/img8.jpg"}
];

const ProductList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className='productsGrid'>
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="productImage"
              onClick={() => openImage(product.imageUrl)}
              style={{ cursor: "pointer" }}
            />
            <h1 className="productName">{product.name}</h1>
            <p className="productPrice"><b>{product.price}</b></p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="מוצר מוגדל" />
        </div>
      )}
    </>
  );
};

export default ProductList;
