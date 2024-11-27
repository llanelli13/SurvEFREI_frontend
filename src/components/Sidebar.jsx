import { NavLink } from "react-router-dom";
import './styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>SurvEFREI</h2>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/home/dashboard" activeClassName="active-link">
              <i className="icon">📊</i>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/profile" activeClassName="active-link">
              <i className="icon">👤</i>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/surveys" activeClassName="active-link">
              <i className="icon">📋</i>
              Surveys
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/signin" activeClassName="active-link">
              <i className="icon">🔐</i>
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/signup" activeClassName="active-link">
              <i className="icon">📝</i>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;