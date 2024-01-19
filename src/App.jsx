import React, { useState } from "react";
import "./App.css";
import LoginHeroImg from "./assets/img/login-hero.png";
import LoginHeroImgMob from "./assets/img/login-hero-mob.png";
import LogoImg from "./assets/img/logo.png";
import MSLogo from "./assets/img/mobile-surety-logo.svg";
import { BsEnvelope, BsEye, BsEyeSlash, BsLock } from "react-icons/bs";

function App() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the state
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="form-junction">
      <section className="login-grid">
        <img className="logo" src={LogoImg} alt="" />
        <img className="hero-pc" src={LoginHeroImg} alt="" />
        <img className="hero-mob" src={LoginHeroImgMob} alt="" />
        <div className="login-box">
          <div className="line"></div>
          <img src={MSLogo} alt="" />
          <h1>Hi, Welcome Back!</h1>
          <h2>Login to your account</h2>

          <div className="input-grp">
            <label htmlFor="">Email Address</label>
            <div className="input-box">
              <BsEnvelope className="input-icon" />
              <input type="text" name="" id="" placeholder="user@domain.com" />
            </div>
          </div>
          <div className="input-grp">
            <label htmlFor="">Password</label>
            <div className="input-box">
              <BsLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name=""
                id=""
                placeholder="********"
              />
              <span>
                {showPassword ? (
                  <BsEyeSlash onClick={togglePasswordVisibility} />
                ) : (
                  <BsEye onClick={togglePasswordVisibility} />
                )}
              </span>
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <button>Login</button>
          <p>
            © 2020-2024 MobileSurety, Inc. <br />
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
