import './styles/ProfileContent.css';
import ProfileInfo from './ProfileInfo';

const ProfileContent = () => {
  return (
    <div className="profile-content">
      <ProfileInfo />
      <div className="profile-details">
        <div className="profile-details-block">Bloc Gauche</div>
        <div className="profile-details-block">Bloc Droit</div>
      </div>
    </div>
  );
};

export default ProfileContent;
