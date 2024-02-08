import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Ah, discovering the perfect book is a bit like stumbling upon a soul mate, isn't it? Picture this: you're browsing through the shelves, and suddenly, you lock eyes with a book that seems to speak directly to your heart. It's like finding a kindred spirit in literary form.So here's to the quest for the perfect book – may we never stop searching, never stop exploring, and never stop falling in love with the magic of storytelling. After all, finding a book that speaks to your soul is a love story unlike any other.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header