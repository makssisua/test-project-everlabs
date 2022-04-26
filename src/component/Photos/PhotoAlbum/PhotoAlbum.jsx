import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { PhotoItem } from "../PhotoItam/PhotoItem";
import "../SearchBar/SearchBar.css"
import "../../../normalize.css"

export const PhotoAlbum = () => {
  const [album, setAlbum] = useState(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <div className="search-container">
        <h1>Photos:</h1>
        <SearchBar
          setAlbum={setAlbum}
          album={album}
          setError={setError}
          setIsLoading={setIsLoading}
        />
      </div>

      {error && (
        <span className='d-flex justify-content-center'><h4>Не вірний номер альбому</h4></span>
      )}

      {!isLoading
        ? (
            <div className="d-flex flex-wrap justify-content-center pb-5 gap-2">
              {album?.map(photo => (
                <PhotoItem
                  key={photo.id}
                  photo={photo}
                />
              ))}
            </div>
          )
        : (
            <div className='d-flex justify-content-center'>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )
      }
    </>
  );
};
