import React, {useState} from 'react'
import useDebounce from "../../CustomHooks/useDebounce";
import useLocalStorage from "../../CustomHooks/useLocalStorage";
import useApi from "../../CustomHooks/useApi";
import Book from "../Book/Book"
import { useNavigate } from "react-router-dom";


const BooksGallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [query, setQuery] = useState("");
    const {debounceQuery} = useDebounce(300, query);
    const navigate = useNavigate();


    const {data} = useApi(
        `https://www.googleapis.com/books/v1/volumes?q=${debounceQuery}&startIndex=${currentPage}&printType=books`, !!debounceQuery
    );

    const [favorites, setFavorites] = useLocalStorage("favorites", {});

    return(
        <div className="books-gallery">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => navigate('/favorites', {state: favorites})}>Favorites</button>
            <div className="books-list">
            {data?.items && data?.items.map(book => {
                return (
                  <Book
                    key={book.id}
                    {...book}
                    isFavorite={
                      favorites[book.id]
                        ? favorites[book.id]["isToggled"]
                        : false
                    }
                    setFavorites={setFavorites}
                    favorites={favorites}
                    book={book}
                  />
                );
            })}
            </div>
            {data ? <div className="pagination">
                <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                <button disabled={currentPage === data?.totalItems} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div> : ""}
        </div>
    )
}

export default  BooksGallery
