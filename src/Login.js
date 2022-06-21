import React, { useState } from "react";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import "./Login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const logintToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
      dispatch(login({
      email:userAuth.user.email,
      uid:userAuth.user.uid,
      displayName:userAuth.user.displayName,
      profileurl:userAuth.user.photoURL
    }))
    })
    .catch((error)=>alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://www.tsnn.com/sites/default/files/linkedin_0.jpg"
        alt="linked image"
      ></img>

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name(required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic url {optional}"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />

        <button type="submit" onClick={logintToApp}>
          Sign In
        </button>
      </form>
      <p>
        not a member ?{""}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
