import React from "react";
import "./styles.scss";
import * as logo from '../../assets/logo512.png'

export const Header = () => {
  return (
    <header className="headerComponent" data-test='headerComponent'>
      <div className="wrap ">
        <div className="logo">
          <img
            // src="https://image.shutterstock.com/image-photo/image-260nw-633031571.jpg"
            src={logo}
            alt="logo"
            with='60'
            height='60'
            className="logoIMG"
            data-test='logoIMG'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;