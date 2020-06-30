import React from "react"
import HeaderImg from "../../assets/img/header-img.png";

const Header = () => {
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={HeaderImg} alt="I’m John" className="fluid-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header
