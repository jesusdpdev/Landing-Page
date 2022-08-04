import React, { useState } from 'react'
import "./navbar.css"
import { FiMenu,FiX } from "react-icons/fi";

//const navbarLinks =[{url: "/home", title:"home"}];
const navbar = ({navbarLinks}) => {
 
  const [menuClicked, setmenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setmenuClicked(!menuClicked);
  };


  return (
  <nav className='navbar'>
    {menuClicked ?(<FiX size={25} className="navbar__menu" onClick={toggleMenuClick}/> ):(

    <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick}/>
    )};



   <ul className={menuClicked ? "navbar__list" : "navbar__list navbar__list--active" } >
       {navbarLinks.map((item) => {
   return (
    <li className="navbar__item" key={item.title} >

	<a className="navbar__link" href={item.url} >
      {item.title}
    </a>	
    </li>
   );
 })};
</ul>
  </nav>
);
};

export default navbar;