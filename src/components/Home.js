import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css"

const Home = () => (
  <div className='home'>
    <div className='home.title'>
      <h1>Welcome to Nicely Planned</h1>
      <h3>Your personal daily planner</h3>
    </div>
    <div className = "signup">
    <span>
      <Link to='/signup'>Sign Up</Link> or <Link to='/login'>Log In</Link>
    </span>
    </div>
  </div>
);

export default Home;
