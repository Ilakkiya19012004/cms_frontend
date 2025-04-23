import './ULogin.css';
import { useNavigate } from "react-router-dom";

function ULogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/complaint"); 
  };

  return (
    <div id="ulogin">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email address</label>
        <input type="email" name="uemail" required />

        <label>Password</label>
        <input type="password" name="upassword" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default ULogin;
