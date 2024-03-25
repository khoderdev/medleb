// import React, { useState, useContext, createContext, useMemo } from 'react';
// import axios from 'axios'; // Import axios

// const DonationContext = createContext();

// export const useDonation = () => useContext(DonationContext);

// export const DonationProvider = ({ children }) => {
//   const [donations, setDonations] = useState([]);

//   const createDonation = async (donationData) => {
//     try {
//       // Send donationData to backend API using axios
//       const response = await axios.post('http://1.1.1.250:9000/donation/add', donationData);
//       const data = response.data;
//       setDonations([...donations, data]);
//     } catch (error) {
//       console.error('Error creating donation:', error);
//       throw new Error('Failed to create donation');
//     }
//   };

//   const getAllDonations = async () => {
//     try {
//       // Fetch all donations from backend API using axios
//       const response = await axios.get('http://1.1.1.250:9000/donation/all');
//       const data = response.data;
//       setDonations(data);
//     } catch (error) {
//       console.error('Error fetching donations:', error);
//       throw new Error('Failed to fetch donations');
//     }
//   };

//   // Memoize the value object
//   const contextValue = useMemo(() => ({
//     donations,
//     createDonation,
//     getAllDonations,
//   }), [donations]); 

//   return (
//     <DonationContext.Provider value={contextValue}>
//       {children}
//     </DonationContext.Provider>
//   );
// };

// // Define and export useCreateDonation hook
// export const useCreateDonation = () => {
//   const { createDonation } = useDonation();
//   return createDonation; // Return the function directly
import axios from 'axios';
// };
import React, { useMemo, useState, useEffect, useContext, createContext } from 'react'; // Import axios

const DonationContext = createContext();

export const useDonation = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);
  const [recipientData, setRecipientData] = useState([]);

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/recipient/all');
        setRecipientData(response.data);
      } catch (error) {
        console.error('Error fetching recipient data:', error);
      }
    };

    fetchRecipientData();
  }, []);

  const createDonation = async (donationData) => {
    try {
      const response = await axios.post('http://1.1.1.250:9000/donation/add', donationData);
      const {data} = response;
      setDonations([...donations, data]);
    } catch (error) {
      console.error('Error creating donation:', error);
      throw new Error('Failed to create donation');
    }
  };

  const getAllDonations = async () => {
    try {
      const response = await axios.get('http://1.1.1.250:9000/donation/all');
      const {data} = response;
      setDonations(data);
    } catch (error) {
      console.error('Error fetching donations:', error);
      throw new Error('Failed to fetch donations');
    }
  };

  const contextValue = useMemo(() => ({
    donations,
    createDonation,
    getAllDonations,
    recipientData, // Include recipient data in the context
  }), [donations, recipientData]);

  return (
    <DonationContext.Provider value={contextValue}>
      {children}
    </DonationContext.Provider>
  );
};

export const useCreateDonation = () => {
  const { createDonation } = useDonation();
  return createDonation;
};
