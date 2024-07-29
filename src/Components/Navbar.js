import React from 'react';
import './Navbar.css'
import { navList } from './constants/index';
import blacklogo from '../assets/logo-black.png';
import bsearch from '../assets/search-b.png';
import btheme from '../assets/night.png';
import lsearch from '../assets/search-w.png';
import ltheme from '../assets/day.png';
import whitelogo from '../assets/logo-white.png';

const Navbar = ({theme, setTheme}) => {
    const toggle_mode=()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }    
    return (
        <header>
            <nav>
                <div>
                <img src={theme=='light' ? blacklogo : whitelogo } className="logo" alt="Logo" />
   </div>
                <div className="Main-menu">{
                    navList.map(nav => (
                        <div className="items" key={nav}>{nav}</div>
                    )
                    )
                }
                </div>

                <div className="searc-box">
                    <input type="text" placeholder="Search" />
                    <img src={theme=='light' ? lsearch  : bsearch } alt="srearch" />

                </div>
                <img src={theme=='light' ? btheme  : ltheme } onClick={()=>{toggle_mode()}} className="toggle-icon" />
            </nav>
        </header>
    )

}

export default Navbar;