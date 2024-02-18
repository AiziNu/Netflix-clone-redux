import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleTransitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTransitionNavBar);
    return () => window.removeEventListener("scroll", handleTransitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cUKzr1s54B8cz40NDugPDrl8iSwycVaqTA&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
