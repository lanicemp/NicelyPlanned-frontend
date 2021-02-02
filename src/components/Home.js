import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
      <h1>Welcome to Nicely Planned</h1>
      <h3>Your personal daily planner</h3>
    <span>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>
  </div>

);

export default Home;