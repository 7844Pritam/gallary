import React from "react";
import { useGallery } from "../context/GalleryContext";

const Gallery = () => {
  const { state } = useGallery();
  const { photos, loading, error } = state;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
