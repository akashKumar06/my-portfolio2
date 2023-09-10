import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// import MainNavigation from "../components/MainNavigation";
import Modal from "../components/Modal";
import pic from "../img.jpg";
import icon from "../icon.png";
import menu_img from "../menu.png";

const RootLayout = () => {
  const [menu, setMenu] = useState(false);
  const menuClickHandler = () => {
    setMenu(true);
  };
  const confirmHandler = () => {
    setMenu(false);
  }
  return (
    <React.Fragment>
      {menu && <Modal onConfirm={confirmHandler}/>}
      <header>
        <Link to="/" className="link">
          <img className="img" src={pic} alt="i" />
          <span className="srtName">Akash Kumar</span>
          <img className="icon" src={icon} alt="icon" />
        </Link>
        <img src={menu_img} alt="" className="menu" onClick={menuClickHandler} />
      </header>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
