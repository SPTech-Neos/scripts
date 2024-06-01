import React from "react";
// import { colors as c } from '../../styles/Colors';

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";


// import { Colors } from '../../styles/Colors';
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileB2BSection from "../../sections/ProfileEstablishment/ProfileEstablishment";

// import * as S from './profileB2B.styled';

const ProfileB2B: React.FC = () => {


  return(
    <AuthContextProviderClient>
      <AuthContextProviderEmployee>
        <div id="profile-wrapper">
          <Sidebar />
          <ProfileB2BSection />
        </div>
      </AuthContextProviderEmployee>
   </AuthContextProviderClient> 
  );

      
}

export default ProfileB2B;
