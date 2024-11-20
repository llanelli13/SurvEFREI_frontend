import './styles/ProfilePage.css';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-main">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </div>
  );
};

export default ProfilePage;
