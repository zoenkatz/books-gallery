import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import BooksGallery from "./Components/BooksGallery/BooksGallery";
import BookDetails from "./Components/BookDetails/BookDetails";
import Favorites from "./Components/Favorites/Favorites";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/books" element={<BooksGallery />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Main;
