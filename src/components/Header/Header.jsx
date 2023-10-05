import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
          <Link to="/login"> Admin</Link>
          <Link to="/student">Student</Link> 
          <Link to="/teacher">Tecaher</Link> 
          
          
        </div>
    );
};

export default Header;