import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="#FF69B4"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#FF69B4"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="	#FF69B4"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      cartIcon={true}
      CartIconElement={FaShoppingCart}
      profileIcon={true}
      ProfileIconElement={FaUser}
      profileIconSize="2vmax"
      searchIcon={true}
      SearchIconElement={FaSearch}
      profileIconColorHover="#FF69B4"
      searchIconColorHover="#FF69B4"
      cartIconColorHover="#FF69B4"
      cartIconMargin="1.5vmax"
    />
  );
};

export default Header;
