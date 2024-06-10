import React from "react";
import * as S from './profileClient.styled';7

import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderClient";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileB2CSection from '../../sections/ProfileClient/ProfileClient';

const ProfileB2C: React.FC = () => {
	return (
		<AuthContextProviderClient>
			<AuthContextProviderEmployee>

				<S.ProfileB2CSection>
					<Sidebar />
					<ProfileB2CSection></ProfileB2CSection>
				</S.ProfileB2CSection>

			</AuthContextProviderEmployee>
			
		</AuthContextProviderClient>
	);
}
export default ProfileB2C;