import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles['header-container']}>
      <Link to="/">
        <img src="/static/images/logo.png" alt="logo" />
      </Link>

      <button className={styles.button}>
        {pathname === "/login" ? (
          <Link to="/signup">Signup</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </button>
    </header>
  );
};

export default Header;
