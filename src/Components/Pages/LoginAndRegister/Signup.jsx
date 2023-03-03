import { IconBrandApple, IconBrandGmail, IconLock, IconMail } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LoginSignUp.scss'

const Signup = () => {
  return (
    <div className="is_signin_or_signup">
      <form className="form_container">
        <div className="title_container">
          <p className="title">Sign Up to your Account</p>
          <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <div className="input_row">
            <IconMail className="icon" />
            <input placeholder="username@gmail.com" name="" type="text" className="input_field" id="email" />
          </div>
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password">
            Password
          </label>
          <div className="input_row">
            <IconLock className="icon" />
            <input placeholder="Password" name="" type="password" className="input_field" id="password" />
          </div>
        </div>
        <button type="button" className="btn_sign">
          <span>Sign Up</span>
        </button>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <button type="button" className="btn_ggl">
          <IconBrandGmail />
          <span>Sign Up with Google</span>
        </button>
        <button type="button" className="btn_apl">
          <IconBrandApple />
          <span>Sign Up with Apple</span>
        </button>
        <p className="note">
          Have Account ?{" "}
          <Link to={"/login"} className="underline text-blue-600">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
