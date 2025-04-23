import './ULogin.css';
import { useNavigate } from "react-router-dom";

function ULogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/complaint"); 
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/Register"); 
  };

  return (
    <div id="ulogin">
      <h1>Login</h1>
      <form>
        <label>Email address</label>
        <input type="email" name="uemail" required />

        <label>Password</label>
        <input type="password" name="upassword" required />

        <button onClick={handleLogin} type="submit">Login</button>
        <button onClick={handleRegister} type="button">Register</button>
        
      </form>
    </div>
  );
}

export default ULogin;
