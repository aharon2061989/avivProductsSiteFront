import React, { useState } from "react";
import "./PhotoGallery.css";

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, Image: "/photos/img1.jpg" },
    { id: 2, Image: "/photos/img2.jpg" },
    { id: 3, Image: "/photos/img3.jpg" },
    { id: 4, Image: "/photos/img4.jpg" },
    { id: 5, Image: "/photos/img5.jpg" },
    { id: 6, Image: "/photos/img6.jpg" },
    { id: 7, Image: "/photos/img7.jpg" },
    { id: 8, Image: "/photos/img8.jpg" },
    { id: 9, Image: "/photos/img9.jpg" },
    { id: 10, Image: "/photos/img11.jpg" },
    { id: 11, Image: "/photos/img12.jpg" },
    { id: 12, Image: "/photos/img13.jpg" },
    { id: 13, Image: "/photos/img14.jpg" },
    { id: 14, Image: "/photos/img15.jpg" },
    { id: 15, Image: "/photos/img16.jpg" },
    { id: 16, Image: "/photos/img17.jpg" },
    { id: 17, Image: "/photos/img18.jpg" },
    { id: 18, Image: "/photos/img19.jpg" }
  ];

  return (
    <div>
      <div className="galleryGrid">
        {images.map((item) => (
          <img
            key={item.id}
            src={item.Image}
            alt={`img-${item.id}`}
            className="galleryImage"
            onClick={() => setSelectedImage(item.Image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="selected" className="popupImage" />
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
