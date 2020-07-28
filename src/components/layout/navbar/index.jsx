import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, MessageSquare, Feather, Smile } from 'react-feather'

// import style from '../../../assets/scss/navbar'

const Navbar = ({ siteTitle }) => (
  <div className="navbar">
    <header className="d-flex align-items-center justify-content-between">
      <div className="">
        <h3>
          <Link to="/">
            <Smile className="align-middle"/> <span className="align-middle"> {siteTitle} </span>
          </Link>
        </h3>
      </div> 
      <div className="main-navigation">
        <nav>
          <ul className="">
            <li><Link to="/" className="lined-link active"> <User /> <span> About </span> </Link></li> 
            <li><Link to="/work" className="lined-link"> <Briefcase /> <span> Work </span> </Link></li> 
            <li><Link to="/pricing" className="lined-link"> <MessageSquare /> <span> pricing </span> </Link></li> 
            <li><Link to="/blog" className="lined-link"> <Feather /> <span> Blog </span> </Link></li>
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
