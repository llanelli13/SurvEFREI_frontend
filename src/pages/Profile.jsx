import './styles/ProfilePage.css';
import ProfileHeader from '../components/ProfileHeader'
import ProfileContent from '../components/ProfileContent'

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
