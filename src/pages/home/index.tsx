// import LeftColumn from './LeftColumn';
// import RightColumn from './RightColumn';
// import React from 'react';

// export default function Home() {
//   return (
//     <div className="bg-white-bg dark:bg-black-bg  overflow-x-hidden">
//       <div className="flex-1 md:flex h-screen relative overflow-x-hidden">
//         <LeftColumn />
//         <RightColumn />
//       </div>
//     </div>
//   );
// }

import React, { useRef } from 'react';

import './styles.css';
import RightColumn from './RightColumn';

const FullPageScroll = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  return (
    <div className="full-page-container">
      <div className="full-page-section section1" ref={section1Ref} />
      <div className="full-page-section" ref={section2Ref}>
        <RightColumn />
      </div>
    </div>
  );
};

export default FullPageScroll;
