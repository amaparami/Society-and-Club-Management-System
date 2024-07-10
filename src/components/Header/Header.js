import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'></h1>
                <p className='text-lead'>The "Societies" is a vibrant hub for all students with various interests. It offers students to apply for different clubs and societies available at the university, get an idea about the events that have been hosted in the past and carry on with future projects.</p>
                <a href = "/Pages/IEEE" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>get started</span>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header