import React from "react";
// import { colors as c } from '../../styles/Colors';

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";


import Sidebar from "../../components/Sidebar/Sidebar";
import * as S from './profileEmployee.styled';
import ProfileEmployeeSection from "../../sections/ProfileEmployee/ProfileEmployee";

// import * as S from './profileB2B.styled';

const ProfileEmployee: React.FC = () => {

    return (

		<AuthContextProviderClient>
			<AuthContextProviderEmployee>

				<AuthContextProviderEstablishment>
					<S.ProfileB2CSection>
						<Sidebar /> {/*tipo perfil chumbado por enquanto */}
						<ProfileEmployeeSection></ProfileEmployeeSection>
					</S.ProfileB2CSection>
				</AuthContextProviderEstablishment>

			</AuthContextProviderEmployee>
			
		</AuthContextProviderClient>

	);

      
}

export default ProfileEmployee;
