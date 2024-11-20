import './styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-container">
        <input type="text" placeholder="Search here" />
      </div>
      <div className="icons-container">
        <span>⚙️</span>
        <span>🔔</span>
      </div>
    </div>
  );
};

export default Header;
