import React, { useState } from "react";
import Modal from "../../components/Modal";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New message from John Doe",
      content:
        "Certainly! I've updated the Notifications component to use the responsive and styled Modal component. Here's the modified Notifications componentCertainly! I've updated the Notifications component to use the responsive and styled Modal component. Here's the modified Notifications componentCertainly! I've updated the Notifications component to use the responsive and styled Modal component. Here's the modified Notifications component Certainly! I've updated the Notifications component to use the responsive and styled Modal component. Here's the modified Notifications componentCertainly! I've updated the Notifications component to use the responsive and styled Modal component. Here's the modified Notifications componentCertainly! I've updated the Notifications component to use the responsive and styled Modal component. Here's the modified Notifications component",
    },
    {
      id: 2,
      title: "You have a meeting at 2:00 PM",
      content: "Meeting details...",
    },
    {
      id: 3,
      title: "Reminder: Pay your bills today",
      content: "Bill payment details...",
    },
    // Add more notifications as needed
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationContent, setNotificationContent] = useState("");
  const [onConfirm, setOnConfirm] = useState("");

  const handleAccordionToggle = (notificationId) => {
    setOpenAccordion(openAccordion === notificationId ? null : notificationId);
    setModalIsOpen(true); // Open the modal when clicking on the accordion
    // Assign the title and content of the clicked notification to state variables
    setNotificationTitle(
      notifications.find((n) => n.id === notificationId)?.title || ""
    );
    setNotificationContent(
      notifications.find((n) => n.id === notificationId)?.content || ""
    );
  };

  const handleMarkAsRead = () => {
    console.log("Marked as Read!!");
    setModalIsOpen(false);
    // handleModalClose();
  };

  return (
    <div className="notifications-page p-4 flex justify-center">
      <div className="w-[50em] text-black-bg dark:text-white-text">
        {notifications.map((notification) => (
          <div key={notification.id} className="mb-4">
            <div
              className="bg-white-bg dark:bg-black-bg p-3 rounded-xl cursor-pointer flex justify-between items-center"
              onClick={() =>
                handleAccordionToggle(notification.id, notification.content)
              }
            >
              <span className="">{notification.title}</span>
              <span className="">
                {openAccordion === notification.id ? "▲" : "▼"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        onClick={onConfirm}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        onConfirm={handleMarkAsRead}
        title={notificationTitle}
      >
        {notificationContent}
      </Modal>
    </div>
  );
};

export default Notifications;
