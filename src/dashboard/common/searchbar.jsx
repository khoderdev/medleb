// import { useState } from 'react';

// import Slide from '@mui/material/Slide';
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import ClickAwayListener from '@mui/material/ClickAwayListener';

// import { bgBlur } from '../../theme/css';
// import Iconify from '../../components/iconify';

// // ----------------------------------------------------------------------

// const HEADER_MOBILE = 64;
// const HEADER_DESKTOP = 65;

// const StyledSearchbar = styled('div')(({ theme }) => ({
//   ...bgBlur({
//     color: theme.palette.background.default,
//   }),
//   top: 0,
//   left: 0,
//   zIndex: 99,
//   width: '100%',
//   display: 'flex',
//   position: 'absolute',
//   alignItems: 'center',
//   height: HEADER_MOBILE,
//   padding: theme.spacing(0, 3),
//   // boxShadow: theme.customShadows.z8,
//   [theme.breakpoints.up('md')]: {
//     height: HEADER_DESKTOP,
//     padding: theme.spacing(0, 5),
//   },
// }));

// // ----------------------------------------------------------------------

// export default function Searchbar() {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <ClickAwayListener onClickAway={handleClose}>
//       <div>
//         {!open && (
//           <IconButton onClick={handleOpen}>
//             <Iconify icon="eva:search-fill" />
//           </IconButton>
//         )}

//         <Slide direction="down" in={open} mountOnEnter unmountOnExit>
//           <StyledSearchbar>
//             <Input
//               autoFocus
//               fullWidth
//               disableUnderline
//               placeholder="Search…"
//               startAdornment={
//                 <InputAdornment position="start">
//                   <Iconify
//                     icon="eva:search-fill"
//                     sx={{ color: 'text.disabled', width: 20, height: 20 }}
//                   />
//                 </InputAdornment>
//               }
//               sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
//             />
//             <Button variant="contained" onClick={handleClose}>
//               Search
//             </Button>
//           </StyledSearchbar>
//         </Slide>
//       </div>
//     </ClickAwayListener>
//   );
// }

import { useState } from 'react';

import Slide from '@mui/material/Slide';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import Iconify from '../../components/iconify';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 65;

export default function Searchbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton
            onClick={handleOpen}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <Iconify icon="eva:search-fill" className="w-5 h-5" />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <div
            className={`absolute top-${HEADER_MOBILE} md:top-${HEADER_DESKTOP} left-0 right-0 bg-white bg-opacity-100 backdrop-blur-lg border border-gray-200 rounded-md shadow-md flex items-center px-3 py-1 md:px-5 md:py-2`}
          >
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" className="text-gray-400 w-5 h-5" />
                </InputAdornment>
              }
              className="mr-2"
            />
            <Button variant="contained" onClick={handleClose} className="rounded-md px-4">
              Search
            </Button>
          </div>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
