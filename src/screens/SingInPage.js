import React, { useRef } from "react";
import "./SingInPage.css";
import { auth } from "../firebase.js";

function SingInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const singIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="singInPage">
      <form>
        <h1>Sing In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={singIn}>
          Submit
        </button>
        <h4>
          {" "}
          <span className="signInPage_grey"> New to Netflix?</span>
          <span className="signInPage_link" onClick={register}>
            Sing Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SingInPage;
