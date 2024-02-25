import '../../src/index.css';
import React from 'react';


export const metadata = {
  title: 'MedLeb - Pharmacy Service',
  description: 'Pharmacy Service',
};

function RootLayout({ children }) {
  return (
    <div className="">
      {children}
    </div>
  );
}

export default RootLayout;
