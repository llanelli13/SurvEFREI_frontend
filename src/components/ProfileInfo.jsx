import './styles/ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-avatar">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile Avatar"
          className="avatar-image"
        />
      </div>
      <div className="profile-details">
        <h2>Nom Prénom</h2>
      </div>
      <div className="profile-actions">
        <button className="action-button">App</button>
        <button className="action-button">Surveys</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
