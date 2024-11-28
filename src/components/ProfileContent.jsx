import { useState } from 'react';
import './styles/ProfileContent.css';
import ProfileInfo from './ProfileInfo';
import ProfileApp from './ProfileApp';
import ProfileSetting from './ProfileSetting';

const ProfileContent = () => {
  const [selected, setSelected] = useState(0);

  const renderSelectedComponent = () => {
    console.log("selected ",selected)
    switch (selected) {
      case 0:
        console.log("ProfileRendering")
        return <ProfileApp />
      case 1:
        return "Coucou Surveys";
      case 2:
        return <ProfileSetting />
      default:
        return null;
    }
  };


  return (
    <div className="profile-content">
      <ProfileInfo selected={selected} setSelected={setSelected}/>
      <div className="profile-details">
        <div className='profile-details-container'>
            {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
