import React, { useState } from 'react';

function NameCard({ name, price }) {
  return (
    <div className=" rounded-md p-4">
      {/* <h2 className="text-xl font-bold">Name: {name}</h2> */}
      <p className="text-green-600 font-semibold">Price: ${price}</p>
    </div>
  );
}

function AddName() {
  const [searchName, setSearchName] = useState('');
  const [phoneData] = useState([
    { name: 'iphone 15', price: 1500 },
    { name: 'samsung s22', price: 1000 },
    { name: 'oppo', price: 500 },
    { name: 'sony', price: 800 },
    { name: 'blackberry', price: 500 },
  ]);
  const [matchedPhone, setMatchedPhone] = useState(null);

  const handleInputChange = (event) => {
    setSearchName(event.target.value.toLowerCase());
    const matched = phoneData.find(
      (phone) => phone.name.toLowerCase() === event.target.value.toLowerCase()
    );
    setMatchedPhone(matched);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-52"
        value={searchName}
        onChange={handleInputChange}
        placeholder="Search Phone Name"
      />
      {matchedPhone && <NameCard name={matchedPhone.name} price={matchedPhone.price} />}
    </div>
  );
}

export default AddName;
