import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import Nav from './nav';
import Main from './main';
import Header from './header';
import Layout from './Layout.tsx';

import SidebarRight from './sidebar/SidebarRight';
import SidebarLeft from './sidebar/SidebarLeft';

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
