import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Logged in!");
  };

  return (
    <div>
      <h2>Login</h2>

      <div>
        <label>E-mail ID:</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      </div>

      <div>
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  /><br />
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;






