// LoadingSkeleton.jsx

import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton = () => {
  return (
    <div>
      <h2>
        <Skeleton width={200} height={20} />
      </h2>
      <p>
        <Skeleton count={3} />
      </p>
      {/* Add more Skeleton components to mimic the structure of your form */}
    </div>
  );
};

export default LoadingSkeleton;
