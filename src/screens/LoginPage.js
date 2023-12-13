// LoginPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  height: 32px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    // Set the maximum height to the window height
    setMaxHeight(window.innerHeight);

    // Update the maximum height if the window is resized
    const handleResize = () => {
      setMaxHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const containerStyle = {
  //   justifyContent: "center",
  //   display: "flex",
  //   height: `${maxHeight}px`,
  //   overflow: "auto", // Add overflow:auto to enable scrolling if content exceeds the maximum height
  // };
  const containerStyle = {
    justifyContent: "center",
    alignItems: "center", // Center vertically
    display: "flex",
    height: `${maxHeight}px`,
    overflow: "auto",
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "superadmin" && password === "password") {
      toast.success("Login Success");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      toast.error("Invalid Username and Password!");
    }

    //onLogin(username);
  };

  return (
    <div style={containerStyle}>
      <LoginCard>
        <h2>Login</h2>
        <LoginInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginCard>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
