import React, { createContext, useContext, useReducer, useEffect } from "react";

const GalleryContext = createContext();

const initialState = {
  photos: [],
  loading: true,
  error: null
};

function galleryReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, photos: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=120")
    .then((res) => res.json())
    .then((data) => {
      // Replace broken image URLs with picsum
      const updated = data.map((photo, i) => ({
        ...photo,
        thumbnailUrl: `https://picsum.photos/150?random=${i}`,
        url: `https://picsum.photos/600?random=${i}`,
      }));

      dispatch({ type: "FETCH_SUCCESS", payload: updated });
    })
    .catch((err) => {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    });
}, []);

  return (
    <GalleryContext.Provider value={{ state, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
