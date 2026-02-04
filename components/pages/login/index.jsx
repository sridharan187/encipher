import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "sridharanbalamurugan@gmail.com" && password === "sridharan123") {
      localStorage.setItem("role", "USER");
      navigate("/user");
    } 
    else if (username === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "ADMIN");
      navigate("/admin");
    } 
    else if (username === "cse" && password === "cse@123") {
      localStorage.setItem("role", "USER");
      navigate("/user");
    } 
    else {
      alert("Wrong credentials ");
    }
  };

  return (
    <div className="login-page">
     
      <div className="bg-img"></div>

     
      <div className="login-container">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
