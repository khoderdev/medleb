// CompanyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('/api/companies/v1.0/companies');
      setCompanies(response.data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  return (
    <div>
      <h2>Company List</h2>
      {companies.map((company) => (
        <div key={company.id}>
          <p>Name: {company.name}</p>
          {/* Display other company data */}
        </div>
      ))}
    </div>
  );
}

export default CompanyList;
