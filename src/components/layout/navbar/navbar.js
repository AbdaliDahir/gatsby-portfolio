import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, MessageSquare, Feather, Smile } from 'react-feather'

import style from '../../../assets/scss/navbar.module.scss'
import link from '../../../assets/scss/lined-link.scss'

const Navbar = ({ siteTitle }) => (
  <div className="navbar">
    <header className="d-flex align-items-center justify-content-between">
      <div className="">
        <h3>
          <Link to="/">
            <Smile className="align-middle"/> <span className={`${style.logo} align-middle`}> {siteTitle} </span>
          </Link>
        </h3>
      </div> 
      <div className="main-navigation">
        <nav>
          <ul className={`${style.navbarList} d-flex align-items-center`}>
            <li><a href="/" className="lined-link active"> <User /> <span> About </span> </a></li> 
            <li><a href="/work" className="lined-link"> <Briefcase /> <span> Work </span> </a></li> 
            <li><a href="/contact" className="lined-link"> <MessageSquare /> <span> Contact </span> </a></li> 
            <li><a href="/blog" className="lined-link"> <Feather /> <span> Blog </span> </a></li>
          </ul>
        </nav> 
      </div>
    </header>
  </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
