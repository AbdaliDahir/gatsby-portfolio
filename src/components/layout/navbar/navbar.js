import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, MessageSquare, Feather } from 'react-feather'

import style from '../../../assets/scss/navbar.module.scss'

const Navbar = ({ siteTitle }) => (
  <div className="navbar">
    <header className="d-flex align-items-center justify-content-between">
      <div className="">
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div> 
      <div className="main-navigation">
        <nav>
          <ul className={`${style.navbarList} d-flex align-items-center`}>
            <li><a href="/"> <User /> <span> About </span> </a></li> 
            <li><a href="/work"> <Briefcase /> <span> Work </span> </a></li> 
            <li><a href="/contact"> <MessageSquare /> <span> Contact </span> </a></li> 
            <li><a href="/blog"> <Feather /> <span> Blog </span> </a></li>
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
