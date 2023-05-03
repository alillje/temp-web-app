import './layout.css'
import * as React from 'react'
import MenuIcon from './img/MenuIcon.svg'
import { useState, useEffect } from 'react'
import NavMenu from '../nav-menu/nav-menu.js'

/**
 * Layout Component.
 * The main layout component.
 * Sets the page layout with CSS grid and inserts the children into the main HTML div element.
 *
 * @param {React.ReactElement} props.main - The React Element to insert into the main field of the component.
 * @param {React.ReactElement} props.bottom - The React Element to insert into the bottom field of the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const Layout = ({ main, bottom }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  useEffect(() => {}, [showMenu])

  if (showMenu) {
    <NavMenu />
  } else {
    return (
     <div className="layoutContainer">
                <div className="layoutTop"><div className="layout-title">Jaktstigen 6</div>
                <div className="layout-menu-button-container"><img onClick={(e) => toggleMenu(e)} src={MenuIcon} alt="MenuIcon" className="menuIcon"></img></div>
                </div>
                <div className="layoutMain" >
                {main}
                </div>
                <div className="layoutBottom">
                    {bottom}
                </div>
    </div>
    )
  }
}

export default Layout
