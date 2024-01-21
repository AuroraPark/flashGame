import React, { useState } from "react";
import axios from "axios";
import WelcomePage from "./WelcomePage";
import "./App.css";
import { useNavigate, Route, Routes } from "react-router-dom";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000", { username, password })
      .then((response) => {
        console.log(response);
        navigate("/welcome");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/welcome"
          element={<WelcomePage {...props} username={username} />}
        />
        <Route path="/" element={<h1>Welcome to the Game</h1>} />
      </Routes>

      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="/welcome">
        <label>
          Username :
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password :
          <input
            type="text"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
