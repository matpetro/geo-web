import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/globe-icon.png`}
            alt="EarthLabel Logo"
            className="logo-icon"
          />
        </div>
        <span className="header-title">GeoWeb</span>
      </div>
      <div className="header-right">
        <button className="register-btn">Register</button>
        <button className="login-btn" onClick={goToLogin}>Login</button>
      </div>
    </header>
  );
};

export default Header;