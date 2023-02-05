import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
    return (
        <>
           <div className="nav">
               <Link to="/" className="link">Home</Link>
               <Link to="/Student" className="link">Student</Link>
               <Link to="/Contact-us" className="link">Contact-us</Link>
               
           </div>
        </>
    );
}

export default AppBar;