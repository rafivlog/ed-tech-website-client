import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = () => {
    return (
        <div>
            
            <Link to="/login">Login</Link> 
            <Link to="/">Register</Link>
        </div>
    );
};

export default Teacher;