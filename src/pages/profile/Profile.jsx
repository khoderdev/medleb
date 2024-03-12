/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import DrugsTab from './DrugsTab';
import DashboardTab from './DashboardTab';
import ProfileSettingsTab from './ProfileSettingsTab';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userName, setUserName] = useState('User 1');
  const [userImage, setUserImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
  );
  const handleSave = (firstName, lastName, uploadedImage) => {
    console.log('Saving:', firstName, lastName, uploadedImage);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleImageChange = (imageDataUrl) => {};

  return (
    <div className="container mx-auto p-4 transition-all duration-300 dark:text-white-text">
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 border-b-2 ${
            activeTab === 'dashboard'
              ? // ? "text-[#00a651] font-bold border-[#00a651]"
                'text-[#00a651] font-bold border-[#00a651] transition-opacity duration-500'
              : 'border-transparent'
          } transition-all duration-300`}
          onClick={() => handleTabChange('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`py-2 px-4 border-b-2 ${
            activeTab === 'drugs'
              ? 'text-[#00a651] font-bold border-[#00a651] transition-opacity duration-500'
              : 'border-transparent'
          } transition-all duration-300`}
          onClick={() => handleTabChange('drugs')}
        >
          Drugs
        </button>
        <button
          className={`py-2 px-4 border-b-2 ${
            activeTab === 'profile'
              ? 'text-[#00a651] font-bold border-[#00a651] transition-opacity duration-500'
              : 'border-transparent'
          } transition-all duration-300`}
          onClick={() => handleTabChange('profile')}
        >
          Settings
        </button>
      </div>
      <div className="transition-all duration-300">
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'drugs' && <DrugsTab />}
        {activeTab === 'profile' && (
          <ProfileSettingsTab
            userName={userName}
            userImage={userImage}
            onNameChange={handleNameChange}
            onImageChange={handleImageChange}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
