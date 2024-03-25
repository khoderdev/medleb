/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
// import React from 'react';
// import { useCountries } from 'use-react-countries';
// import { Menu, Input, Button, MenuList, MenuItem, MenuHandler } from '@material-tailwind/react';

// export function Countries({ title, className }) {
//   const { countries } = useCountries();
//   const [country, setCountry] = React.useState(0);
//   const { name, flags, countryCallingCode } = countries[country];

//   return (
//     <div className={`relative flex w-full max-w-[24rem] ${className}`}>
//       {title && <div className="mb-2">{title}</div>}
//       <Menu placement="bottom-start">
//         <MenuHandler>
//           <Button
//             ripple={false}
//             variant="text"
//             color="blue-gray"
//             className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
//           >
//             <img src={flags.svg} alt={name} className="h-4 w-4 rounded-full object-cover" />
//             {countryCallingCode}
//           </Button>
//         </MenuHandler>
//         <MenuList className="max-h-[20rem] max-w-[18rem] bg-white-contents ">
//           {countries.map(({ name, flags, countryCallingCode }, index) => (
//             <MenuItem
//               key={name}
//               value={name}
//               className="flex items-center gap-2"
//               onClick={() => setCountry(index)}
//             >
//               <img src={flags.svg} alt={name} className="h-5 w-5 rounded-full object-cover" />
//               {name} <span className="ml-auto">{countryCallingCode}</span>
//             </MenuItem>
//           ))}
//         </MenuList>
//       </Menu>
//       <Input
//         type="tel"
//         placeholder="Mobile Number"
//         className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
//         labelProps={{
//           className: 'before:content-none after:content-none',
//         }}
//         containerProps={{
//           className: 'min-w-0',
//         }}
//       />
//     </div>
//   );
// }
import React, { useRef, useState, useEffect } from 'react';
import { useCountries } from 'use-react-countries';
import { Menu, MenuList, MenuItem, MenuHandler } from '@material-tailwind/react';

export function Countries({ title, className }) {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [country, setCountry] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setSelectedCountry(countries[country]?.name);
  }, [country, countries]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const foundCountry = countries.find(
          (country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        if (foundCountry) {
          setCountry(countries.indexOf(foundCountry));
          setSelectedCountry(foundCountry.name);
          setSearchTerm('');
        }
      }
    };

    inputRef.current.addEventListener('keydown', handleKeyDown);

    return () => {
      inputRef.current.removeEventListener('keydown', handleKeyDown);
    };
  }, [countries, searchTerm]);

  return (
    <div className={`relative ${className}`}>
      {title && <div className="mb-">{title}</div>}
      <Menu placement="bottom-start" className="w-full">
        <MenuHandler>
          <div
            ripple={false}
            className="relative cursor-pointer flex items-center justify-between w-full h-10 rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-12 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
          >
            <button className="absolute inset-y-0 left-2 flex items-center gap-2">
              <img
                src={countries[country]?.flags.svg}
                alt={countries[country]?.name}
                className="h-4 w-4 rounded-full object-cover"
              />
              <span>{selectedCountry}</span>
            </button>
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type to search..."
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem] bg-white-contents">
          {countries
            .filter((country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
            .map(({ name, flags }, index) => (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => {
                  setCountry(index);
                  setSelectedCountry(name);
                  setSearchTerm('');
                }}
              >
                <img src={flags.svg} alt={name} className="h-5 w-5 rounded-full object-cover" />
                {name}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </div>
  );
}
