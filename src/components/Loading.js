// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-customBlue2">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.1);
          border-left-color: #ffffff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
