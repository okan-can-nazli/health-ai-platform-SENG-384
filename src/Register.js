import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("engineer");

  const handleRegister = () => {
    if (!email.endsWith(".edu")) {
      alert("Only institutional .edu emails are allowed!");
      return;
    }
    alert(`Registered as ${role}: ${email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px" }}>
      <h2>Health AI Platform</h2>
      <h3>Register</h3>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <input
        type="email"
        placeholder="Institutional Email (.edu)"
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
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}
      >
        <option value="engineer">Engineer</option>
        <option value="healthcare">Healthcare Professional</option>
      </select>
      <button onClick={handleRegister} style={{ padding: "8px 20px" }}>
        Register
      </button>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default Register;