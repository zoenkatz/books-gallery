import React from 'react'
import {useLocation} from 'react-router-dom';
import Book from "../Book/Book"

const Favorites = () => {
    const location = useLocation();
    const favorites = location.state;

    return (
        <div className="favorites">
            {Object.values(favorites).map((item, index) => {
                console.log(item)
                const {book} = item
                console.log(book, "book")
                return (
                    <Book {...book} key={index} isFavorite={true}/>
                )
            })}
        </div>
    )
}

export default Favorites
