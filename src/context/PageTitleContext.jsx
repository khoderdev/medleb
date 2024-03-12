import PropTypes from 'prop-types';
import React, { useState, useContext, createContext, useMemo } from 'react';

const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
    const [pageTitle, setPageTitle] = useState('');

    const contextValue = useMemo(() => ({ pageTitle, setPageTitle }), [pageTitle]);

    return <PageTitleContext.Provider value={contextValue}>{children}</PageTitleContext.Provider>;
};

PageTitleProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const usePageTitle = () => useContext(PageTitleContext);
