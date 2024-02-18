import React from "react";
import "./ProfilePage.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlanScreen from "../PlanScreen";

function ProfilePage() {
  const user = useSelector(selectUser);
  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePage_body">
        <h1>Edit Profile</h1>
        <div className="profilePage_info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cUKzr1s54B8cz40NDugPDrl8iSwycVaqTA&usqp=CAU"
            alt=""
          />

          <div className="profilePage_details">
            <h2>{user.email}</h2>
            <div className="profilePage_plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className="profilePage_singOut"
              >
                Sing Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
