import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simule un login en redirigeant vers l'écran d'accueil
    navigate("/home");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Login</h1>
        <button onClick={handleLogin}>Se connecter</button>
      </div>
    </div>
  );
};

export default Login;
