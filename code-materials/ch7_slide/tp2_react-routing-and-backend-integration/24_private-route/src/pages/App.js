import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function App() {
  const navigate = useNavigate();

  console.log(navigate);
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default App;
