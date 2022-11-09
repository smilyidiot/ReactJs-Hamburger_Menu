// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" className="button" testid="hamburgerIconButton">
            <GiHamburgerMenu className="hamburger" />
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="close-button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="popup-items">
              <li className="popup-bar">
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome className="icon" />
                  <p className="link">Home</p>
                </Link>
              </li>
              <li className="popup-bar">
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill className="icon" />
                  <p className="link">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
