import React from 'react';

import Profile from './Profile';
import GlobalPagesLayouts from '../GlobalPagesLayouts';

function ProfilePage() {
  return (
    <div>
      <GlobalPagesLayouts title="Profile">
        <Profile />
      </GlobalPagesLayouts>
    </div>
  );
}

export default ProfilePage;
