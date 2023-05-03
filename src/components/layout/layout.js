import './layout.css'
import * as React from 'react'
import MenuIcon from './img/MenuIcon.svg'

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
  return (
     <div className="layoutContainer">
                <div className="layoutTop"><div className="layout-title">Jaktstigen 6</div>
                <div className="layout-menu-button-container"><img src={MenuIcon} alt="MenuIcon" className="menuIcon"></img></div>
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

export default Layout
