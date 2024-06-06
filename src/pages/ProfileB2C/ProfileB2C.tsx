import React from "react";
import * as S from './profile.styled';7
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileB2CSection from '../../sections/ProfileB2C/ProfileB2C';

const ProfileB2C: React.FC = () => (
	<S.ProfileB2CSection>
		<Sidebar color="" tipoperfil="B2C" /> {/*tipo perfil chumbado por enquanto */}
		<ProfileB2CSection></ProfileB2CSection>
	</S.ProfileB2CSection>
);

export default ProfileB2C;