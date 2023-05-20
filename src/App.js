import React, { useState } from "react";
import './App.css';
import ElectricityUsesData from './component/ElectricityUsesData';
import logo from "./assets/blueLogo.png";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const checkPw = () => {
    const answer = document.getElementById("password").value;

    if (answer === "pranav") {
      setIsVerified(true);
    } else {
      alert("Sorry, Please Enter Correct Password");
    }
  };
  return (
    <>
    {isVerified ? (
      <>
        <ElectricityUsesData />
      </>
    ) : (
      <>
      <img className="logo" alt="logo" src={logo}/>
      <form onSubmit={checkPw}>
      <div className="LockSection" data-te-input-wrapper-init>
        <h1 className="mb-4 text-lg">Enter Password</h1>
        <input
          type="text"
          className="peer"
          id="password"
          name="password"
          placeholder="Enter Your Password"
        /><br />
        <input className="btn-gradient-1" name="submit" type="submit" />
        </div>
      </form>
      </>
    )}
  </>
  );
}

export default App;
