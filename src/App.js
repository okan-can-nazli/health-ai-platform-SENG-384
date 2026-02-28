import Login from "./Login";
import Register from "./Register";

function App() {
  const path = window.location.pathname;
  return path === "/register" ? <Register /> : <Login />;
}

export default App;