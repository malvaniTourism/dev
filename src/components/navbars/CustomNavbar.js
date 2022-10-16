import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css'
import MyLogo from '../../assets/img/logoMT.png';

const CustomNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            {!toggleMenu &&
            <div className="mobile-logo">
                <a href="index-2.html">
                    <img src={MyLogo} className='myLogo' alt="logo" />
                </a>
            </div>}
            {((toggleMenu || screenWidth > 500) && (

                <ul className="list">
                    {toggleMenu ?
                        <button onClick={toggleNav} className="toggleBtn">
                            <CloseIcon style={{ fontSize: 40, color: '#fff' }} />
                        </button> :
                        null
                    }
                    <li className="items"><a href="#">Home</a></li>
                    <li className="items"><a href="#/list">Service</a></li>
                    <li className="items"><a href="#">Transport</a>
                        {/* <ul className="sub-menu">
                            <li>
                                <a href="#">Coming Soon</a>
                                //<Link to={'#'} state={{ page: 'MSRTC Bus' }}>Coming Soon</Link>
                            </li>
                        </ul> */}
                    </li>
                    <li className="items"><a href="#/cities">Cities</a></li>
                    <li className="items"><a href="#/places">Places</a></li>
                    <li className="items"><a href="#/contactus">Contact</a></li>
                    <li className="items"><a href="#/aboutus">About</a></li>
                    <li className="items"><a href="#/list">List</a></li>
                    <li className="items"><a href="#/blogs">Blog</a></li>
                </ul>
            ))}
            {!toggleMenu &&
            <div className="mobile-logo">
            </div>}
            {toggleMenu ?
                null :
                <button onClick={toggleNav} className="toggleBtn">

                    <MenuIcon style={{ fontSize: 40, color: '#fff ' }} />
                </button>
            }
        </nav>
    )
}

export default CustomNavbar
