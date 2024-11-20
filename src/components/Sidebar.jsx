import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "250px", background: "#f4f4f4", padding: "20px" }}>
      <h2>Menu</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <NavLink
              to="/home/profile"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black", textDecoration: "none" })}
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/dashboard"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black", textDecoration: "none" })}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/surveys"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black", textDecoration: "none" })}
            >
              Surveys
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
