import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import Main from './main';
import Header from './header';
import SidebarLeft from './sidebar/SidebarLeft';
import SidebarRight from './sidebar/SidebarRight';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <SidebarLeft />
        <Main>{children}</Main>
        <SidebarRight />
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
