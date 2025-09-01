import React from "react";

const GalleryItem = ({ photo }) => {
  return (
    <div className="gallery-item">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
};

export default GalleryItem;