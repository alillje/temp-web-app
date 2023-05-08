import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleMenu } from '../../redux/reducers/menu.js'
import { useEffect } from 'react'
import CloseButton from './img/CloseButton.svg'
import './nav-menu.css'

/**
 * NavMenu Component.
 */
const NavMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
  }, [])

  /**
   * Hides the nav menu.
   */
  const closeSidebar = () => {
    dispatch(
      toggleMenu({
        show: false
      })
    )
  }

  /**
   * Navigatets to the given path.
   */
  const goToPath = (path = '/') => {
    closeSidebar()
    navigate(path)
  }

  return (
<div className="nav-menu-container">
  <div className="nav-menu-close-container"><img onClick={closeSidebar} src={CloseButton}></img></div>
  <div className="nav-item-list">
    <div className="nav-item" onClick={() => goToPath('/')}>Current Temperature</div>
    <div className="nav-item" onClick={() => goToPath('/hour-average')}>Last 24 hours</div>
    <div className="nav-item" onClick={() => goToPath('/day-average')}>Last 10 days</div>
  </div>
</div>
  )
}

export default NavMenu
