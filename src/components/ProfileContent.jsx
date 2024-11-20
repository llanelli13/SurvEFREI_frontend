import './styles/ProfileContent.css';
import ProfileInfo from './ProfileInfo';

const ProfileContent = () => {
  return (
    <div className="profile-content">
      <ProfileInfo />
      <div className="profile-details">
        <div className="profile-details-block">Platform Settings</div>
        <div className="profile-details-block">Account Information</div>
      </div>
    </div>
  );
};

export default ProfileContent;
