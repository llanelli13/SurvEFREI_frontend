import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import './styles/Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
