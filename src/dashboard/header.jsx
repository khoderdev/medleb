// import PropTypes from 'prop-types';

// import { Box } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { useTheme } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';

// import { bgBlur } from '../theme/css';
// import { HEADER } from './config-layout';
// import Searchbar from './common/searchbar';
// import Iconify from '../components/iconify';
// import AccountPopover from './common/account-popover';
// import { useResponsive } from '../hooks/use-responsive';
// import LanguagePopover from './common/language-popover';
// import NotificationsPopover from './common/notifications-popover';

// // ----------------------------------------------------------------------

// export default function Header({ onOpenNav }) {
//   const theme = useTheme();

//   const lgUp = useResponsive('up', 'lg');

//   const renderContent = (
//     <>
//       {!lgUp && (
//         <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
//           <Iconify icon="eva:menu-2-fill" />
//         </IconButton>
//       )}

//       <Searchbar />

//       <Box sx={{ flexGrow: 1 }} />

//       <Stack direction="row" alignItems="center" spacing={1}>
//         <LanguagePopover />
//         <NotificationsPopover />
//         <AccountPopover />
//       </Stack>
//     </>
//   );

//   return (
//     <AppBar
//       sx={{
//         boxShadow: 'none',
//         height: HEADER.H_MOBILE,
//         zIndex: theme.zIndex.appBar + 1,
//         ...bgBlur({
//           color: theme.palette.background.default,
//         }),
//         transition: theme.transitions.create(['height'], {
//           duration: theme.transitions.duration.shorter,
//         }),
//         ...(lgUp && {
//           height: HEADER.H_DESKTOP,
//         }),
//       }}
//     >
//       <Toolbar
//         sx={{
//           height: 1,
//           px: { lg: 12 },
//         }}
//       >
//         {renderContent}
//       </Toolbar>
//     </AppBar>
//   );
// }

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };

// // ----------------------------------------------------------

// // import PropTypes from 'prop-types';

// // import { Box } from '@mui/material';
// // import Stack from '@mui/material/Stack';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import { useTheme } from '@mui/material/styles';
// // import IconButton from '@mui/material/IconButton';

// // import { bgBlur } from '../theme/css';
// // import Searchbar from './common/searchbar';
// // import Iconify from '../components/iconify';
// // import { HEADER } from './config-layout';
// // import AccountPopover from './common/account-popover';
// // import { useResponsive } from '../hooks/use-responsive';
// // import LanguagePopover from './common/language-popover';
// // import NotificationsPopover from './common/notifications-popover';

// // // ----------------------------------------------------------------------

// // export default function Header({ onOpenNav }) {
// //   const lgUp = useResponsive('up', 'lg');

// //   const renderContent = (
// //     <>
// //       {!lgUp && (
// //         <button onClick={onOpenNav} className="p-2">
// //           <Iconify icon="eva:menu-2-fill" />
// //         </button>
// //       )}

// //       <Searchbar />

// //       <Box className="flex-grow" />

// //       <Stack direction="row" alignItems="center" spacing={1}>
// //         <LanguagePopover />
// //         <NotificationsPopover />
// //         <AccountPopover />
// //       </Stack>
// //     </>
// //   );

// //   return (
// //     <AppBar className={`shadow-none ${lgUp ? 'h-20' : 'h-16'}`}>
// //       <Toolbar className={`px-4 ${lgUp ? 'md:px-20' : ''}`}>{renderContent}</Toolbar>
// //     </AppBar>
// //   );
// // }

// // Header.propTypes = {
// //   onOpenNav: PropTypes.func,
// // };

// import PropTypes from 'prop-types';
// import { usePageTitle } from '../context/PageTitleContext';
// import { Box } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { useTheme } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';

// import { HEADER } from './config-layout';
// import Searchbar from './common/searchbar';
// import Iconify from '../components/iconify';
// import AccountPopover from './common/account-popover';
// import { useResponsive } from '../hooks/use-responsive';
// import LanguagePopover from './common/language-popover';
// import NotificationsPopover from './common/notifications-popover';

// // ----------------------------------------------------------------------

// export default function Header({ onOpenNav }) {
//   const { pageTitle } = usePageTitle(); // Accessing page title using usePageTitle hook
//   const theme = useTheme();
//   const lgUp = useResponsive('up', 'lg');

//   const renderContent = (
//     <>
//       {!lgUp && (
//         <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
//           <Iconify icon="eva:menu-2-fill" />
//         </IconButton>
//       )}

//       <Searchbar />

//       <Box sx={{ flexGrow: 1 }} />

//       <Stack direction="row" alignItems="center" spacing={1}>
//         <LanguagePopover />
//         <NotificationsPopover />
//         <AccountPopover />
//       </Stack>
//     </>
//   );

//   return (
//     <AppBar
//       sx={{
//         boxShadow: 'none',
//         height: HEADER.H_MOBILE,
//         zIndex: theme.zIndex.appBar + 1,
//         backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust transparency as needed
//         backdropFilter: 'blur(10px)', // Apply glass effect
//         WebkitBackdropFilter: 'blur(10px)', // For Safari
//         ...(lgUp && {
//           height: HEADER.H_DESKTOP,
//         }),
//       }}
//     >
//       <Toolbar
//         className="container mx-auto px-4"
//         style={{ maxWidth: '90%' }} // Adjust the maxWidth value as needed
//       >
//         <h1>{pageTitle}</h1> {/* Displaying the dynamic page title */}
//         {renderContent}
//       </Toolbar>
//     </AppBar>
//   );
// }

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };

import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { usePageTitle } from '../context/PageTitleContext';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { HEADER } from './config-layout';
import Searchbar from './common/searchbar';
import Iconify from '../components/iconify';
import AccountPopover from './common/account-popover';
import { useResponsive } from '../hooks/use-responsive';
import LanguagePopover from './common/language-popover';
import NotificationsPopover from './common/notifications-popover';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  const { pageTitle } = usePageTitle();
  const { children, window } = props;

  const renderContent = (
    <>
      <div className="flex border border-red-500 items-center">
        <Searchbar />
        <div className="flex-grow" />
        <div className="flex flex-row items-center space-x-1">
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </div>
      </div>
    </>
  );

  return (
    <AppBar>
      <div className="container mx-auto  max-w-screen-xl px-20 bg-transparent">
        <h1 className="text-white-text">{pageTitle}</h1> {/* Displaying the dynamic page title */}
        {renderContent}
      </div>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
