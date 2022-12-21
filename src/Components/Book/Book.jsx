import React from "react";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";

const Book = ({ volumeInfo, id, isFavorite, favorites, setFavorites, book }) => {
  const { title, imageLinks } = volumeInfo || { title: "", imageLinks: {
          thumbnail: ''
      } };
    const navigate = useNavigate();

  const toggleToFavorites = (isFavoriteToggle) => {
         setFavorites({...favorites, [id]: {isToggled: isFavoriteToggle, book}});
  };

  return (
    <div className="book">
      <div className="book-title" title={title}>
        {title}
      </div>
      <div className="book-image">
        <img
          src={imageLinks?.thumbnail}
          height={100}
          width={100}
          alt="book-img"
        />
      </div>
      <div className="book-more">
        <button onClick={() => navigate(`/book/${id}`, {state: volumeInfo})}>Show more</button>
      </div>
      <div className="book-favorite-toggle">
        <Toggle
          id="book-favorite"
          defaultChecked={isFavorite}
          onChange={() => toggleToFavorites(!isFavorite)}
        />
        <label htmlFor="book-favorites">Add to favorite</label>
      </div>
    </div>
  );
};

export default Book;
