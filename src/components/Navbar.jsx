import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav className='navbar'>
         <p className='header'>Contacts</p>
         <div className='button-div'>
           <Link to="/add">
           <button className='addbtn'>Create Contact</button>
           </Link>
           <Link to="allcontacts">
           <button className='addbtn'>All Contacts</button>
           </Link>
       </div>
     </nav>
  );
};

export default Navbar;
