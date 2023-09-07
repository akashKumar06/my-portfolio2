import {Link, Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import pic from "../img.jpg";
import icon from '../icon.png';

const RootLayout = () => {
  return (
    <>
      <Link to="/" className="header">
        <img className="img" src={pic} alt="i" />
        <span className="srtName">Akash Kumar</span>
        <img className="icon" src={icon} alt="icon" />
      </Link>
      <div className="container">
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
