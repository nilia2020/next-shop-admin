import { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import endPoints from '@pages/api/index';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProviderAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

    if (access_token) {
      const token = access_token.access_token;
      Cookies.set('token', token, { expires: 5 });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };
  const logout = async () => {
    Cookies.remove('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = '/login';
  };
  return {
    user,
    signIn,
    logout,
  };
};
