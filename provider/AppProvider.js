import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function AppProvider({ children }) {
  const [login, setLogin] = useState({ email: '', senha: '' });
  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [validation, setValidation] = useState(true)

  const contextValue = {
    login,
    setLogin,
    alert,
    setAlert,
    validation,
    setValidation
  };
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
