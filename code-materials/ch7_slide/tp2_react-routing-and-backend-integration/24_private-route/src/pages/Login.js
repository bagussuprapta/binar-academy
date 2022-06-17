import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  // TODO: Hit endpoint back-end mu yak
  console.log({ email, password });
  return "initoken";
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input type="submit" value={isLoading ? "Loading" : "Login"} />
          </form>
        ) : (
          <input type="submit" value="Logout" onClick={handleLogout} />
        )}
      </header>
    </div>
  );
}

export default Login;
