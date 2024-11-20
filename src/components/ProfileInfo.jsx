import './styles/ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-avatar">
        <img
          src="https://via.placeholder.com/100" // Remplacez par l'URL de l'image
          alt="Avatar"
          className="avatar-image"
        />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">Prénom Nom</h2>
        <p className="profile-status">Student / Admin / Teacher</p>
      </div>
      <div className="profile-actions">
        <button className="btn btn-primary">App</button>
        <button className="btn btn-primary">Surveys</button>
        <button className="btn btn-secondary">Settings</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
