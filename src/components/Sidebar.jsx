import { Link } from "react-router-dom";
import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Student</h3>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/home/dashboard">Dashboard</Link></li>
        <li><Link to="/home/surveys">Surveys</Link></li>
        <li><Link to="/home/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
