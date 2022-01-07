import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function  Home() {
  return (
    <div class="home">
      <h1>Google Clone Homepage!</h1>
      <h3>Search Here</h3>
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">

      </div>
    </div>
  )
}

export default Home