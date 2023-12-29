// PWAPromptBtn.jsx
import React from 'react';
import usePWA from 'react-pwa-install-prompt'; // Update the path accordingly

const PWAPromptBtn = () => {
  const { isInstallPromptSupported, promptInstall, isStandalone } = usePWA();

  if (isInstallPromptSupported) {
    return <button onClick={promptInstall}>Install App</button>;
  }

  return <p>App is running in {isStandalone ? 'standalone' : 'browser'} mode.</p>;
};

export default PWAPromptBtn;
