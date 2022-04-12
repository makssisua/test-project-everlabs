import React, { useState } from "react";
import { getAlbum } from "../../api/albumApi";

export const SearchBar = ({ setAlbum, setError, setIsLoading } ) => {
  const [inputValue, setInputValue] = useState('')
  const [currentAlbum, setCurrentAlbum] = useState(null)

  const searchAlbum = async () => {
    setIsLoading(true)

    if (inputValue !== '') {
      const newAlbum = await getAlbum(inputValue)

      if (inputValue <= 0 || inputValue > 100) {
        setError(true)
      } else {
        setAlbum(newAlbum)
        setCurrentAlbum(inputValue)
        setError(false)
        setIsLoading(false)
      }
    }
  }

  return (
      <section className='d-flex gap-2 pb-4'>
        <input
          value={inputValue}
          type="number"
          className="form-control"
          placeholder="Номер альбому(1-100)"
          aria-describedby="button-addon2"
          onChange={(event) => {
            setError(false);
            setInputValue(event.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={searchAlbum}
          disabled={currentAlbum === inputValue}
        >
          Пошук
        </button>
      </section>
  );
};
