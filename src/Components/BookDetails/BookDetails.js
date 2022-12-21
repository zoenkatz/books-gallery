import React from 'react'
import {useLocation} from 'react-router-dom';

const BookDetails = () => {
    const location = useLocation();
    const {publisher, authors, subtitle, categories} = location.state

    return (
        <div className="book-details">
            <h2>More Details:</h2>
            <div>
                <label>Publisher:</label>
                <span>{publisher}</span>
            </div>
            <div>
                <label>Authors:</label>
                {authors.map((author, index) => {
                    return <span key={index}>{author}</span>
                })}

            </div>
            <div>
                <label>Subtitle:</label>
                <span>{subtitle}</span>
            </div>
            <div>
                <label>Categories:</label>
                {categories.map((category, index) => {
                    return <span key={index}>{category}</span>
                })}
            </div>
        </div>
    )
};

export default BookDetails
