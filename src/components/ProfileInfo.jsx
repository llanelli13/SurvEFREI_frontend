import { useState } from 'react';
import './styles/ProfileInfo.css';

const ProfileInfo = () => {
  const [selected, setSelected] = useState(null);

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
        <p className="profile-status">UserStatus</p>
      </div>
      <div className="profile-actions">
        {['App', 'Surveys', 'Settings'].map((label, index) => (
            <button
              key={index}
              className={`profile-button ${selected === index ? 'selected' : ''}`}
              onClick={() => setSelected(index)}
            >
              {label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
