import React, { Component } from 'react';
import image from './homepage.png'
const Home = () => {
    return (  
    <>
        <div id='heading'>
            <h1>Education Loan Portal</h1>
        </div>
        <div id='subhead'>
            <p>All Info Under One Click</p>
        </div>
        <img src={image} id='gold'></img>
        <div>
          <button type="submit" className="button" id='adlog'>
            Admin Login
          </button>
        </div>
        <div>
          <button type="submit" className="button" id='uselog'>
            User Login
          </button>
        </div>
    </>
    )
}

export default Home;