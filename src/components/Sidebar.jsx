import { NavLink } from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';  // Import du composant LanguageSwitcher
import './styles/Sidebar.css';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {

  const { t } = useTranslation();

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
                {t('dashboard')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/profile" activeClassName="active-link">
              <i className="icon">👤</i>
              {t('profile')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/surveys" activeClassName="active-link">
              <i className="icon">📋</i>
              {t('surveys')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/signin" activeClassName="active-link">
              <i className="icon">🔐</i>
              {t("sign in")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/signup" activeClassName="active-link">
              <i className="icon">📝</i>
              {t('sign up')}
            </NavLink>
          </li>
        </ul>
      </nav>
      
      {/* Ajouter le LanguageSwitcher en bas de la Sidebar */}
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
