import React, { useState } from "react";
import "./LoginPage.css";
import SingInPage from "./SingInPage";

function LoginPage() {
  const [signIn, setSingIn] = useState(false);
  return (
    <div className="loginPage">
      <div className="loginPage_background">
        <img
          className="loginPage_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button onClick={() => setSingIn(true)} className="loginPage_btn">
          Sing In
        </button>
        <div className="loginPage_gradient" />
      </div>
      <div className="loginPage_body">
        {signIn ? (
          <SingInPage />
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? enter your email to create or restart membership.
            </h3>
            <div className="loginPage-input">
              <form>
                <input type="email" placeholder="Email Address..." />
                <button
                  onClick={() => setSingIn(true)}
                  className="loginPage_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
