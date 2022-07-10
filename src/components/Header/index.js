import React from "react";

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <Link to="/">
        <img src="/static/images/logo.png" alt="logo" />
      </Link>

      <button>
        {pathname === "/login" ? (
          <Link to="/signup">sign up</Link>
        ) : (
          <Link to="/login">login</Link>
        )}
      </button>
    </header>
  );
};

export default Header;
