import React from "react";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileB2BSection from "../../sections/ProfileB2B/ProfileB2B";
// import * as S from './profileB2B.styled';

const ProfileB2B: React.FC = () => (
  <AuthContextProviderEmployee>
    <div id="profile-wrapper">
      <HeaderProfile />
      <Sidebar color="var(--color-green-300)" tipoperfil="B2B" />{" "} {/*tipo perfil chumbado por enquanto */}
      <ProfileB2BSection />
    </div>
  </AuthContextProviderEmployee>
);

export default ProfileB2B;
