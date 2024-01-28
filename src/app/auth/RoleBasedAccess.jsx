import React from 'react';
import PropTypes from 'prop-types';

const RoleBasedAccess = ({ allowedRoles, userRoles, children }) => {
  const hasPermission = () => {
    // Check if userRoles is defined before using "includes"
    return userRoles && userRoles.some(role => allowedRoles.includes(role));
  };

  return hasPermission() ? <>{children}</> : null;
};

RoleBasedAccess.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  userRoles: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

export default RoleBasedAccess;
