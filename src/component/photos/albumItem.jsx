import React from "react";

export const AlbumItem = ({ photo }) => {
  return (
    <img src={photo.url} className="card-img-top w-25" alt={photo.title} />
  );
};
