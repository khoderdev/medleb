/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  // Function to generate random notifications
  const generateRandomNotifications = () => {
    const tempNotifications = [];
    for (let i = 0; i < 4; i++) {
      const id = i + 1;
      const randomUser = `https://randomuser.me/api/portraits/women/${Math.floor(
        Math.random() * 100
      )}.jpg`;
      const notification = {
        id,
        image: randomUser,
        name: `Agent ${id}`,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laborum?',
      };
      tempNotifications.push(notification);
    }
    setNotifications(tempNotifications);
  };

  // Generate random notifications on component mount
  useEffect(() => {
    generateRandomNotifications();
  }, []);

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="flex flex-col gap-4 p-2 ">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="relative bg-white-text dark:bg-black-bg  rounded-lg shadow-lg"
        >
          <button
            onClick={() => removeNotification(notification.id)}
            className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="flex items-center p-4 ">
            <img
              className="object-cover w-12 h-12 rounded-lg"
              src={notification.image}
              alt={notification.name}
            />

            <div className="ml-3 overflow-hidden">
              <p className="font-medium text-gray-900 dark:text-white-text">{notification.name}</p>
              <p className="max-w-xs text-sm text-gray-500 truncate">{notification.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
