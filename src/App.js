import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in with ${email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px" }}>
      <h2>Health AI Platform</h2>
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <button onClick={handleLogin} style={{ padding: "8px 20px" }}>
        Login
      </button>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
}

export default Login;