import './styles/ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-avatar">
        <img
          src="https://imgs.search.brave.com/bBck5n4xADEvFApavWIC6GxAni29mg_I6_KwCb__wpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMzEzNS8zMTM1/NzY4LnBuZw"
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
