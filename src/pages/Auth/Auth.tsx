import React from 'react';
import { useLocation } from "react-router-dom";

import ChooseAuth from '../../sections/ChooseAuth/ChooseAuth';
import Login from '../../sections/Auth/Login/Login';
// import Signup from '../../sections/Signup/Signup';
import { Colors } from '../../styles/Colors';

import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";

const Auth: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract the mode query parameter (default to 'login')
  const mode = searchParams.get('mode') || 'login' || 'choose-auth';

  const colorBg = Colors.gradientDefault;

  return (
    <>
      {mode === 'login' && <Login imgUrl={'/happy-woman.svg'} bgColor={colorBg} imgAlt={'Login'}></Login>}
      {/* {mode === 'signup' && <Signup></Signup>} */}
      {mode === 'choose-auth' && 
        <AuthContextProviderClient>
          <AuthContextProviderEmployee>
            <ChooseAuth />
          </AuthContextProviderEmployee>
        </AuthContextProviderClient>
      }
    </>
  );
};

export default Auth;