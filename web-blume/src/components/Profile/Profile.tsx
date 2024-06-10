import React from "react";

import * as S from './profile.styled';

const Profile: React.FC<S.ProfileProps> = ({profile, tipoperfil, username}) => (
	<S.ContainerProfile direction="row">

                <S.ContainerProfileImg profile={profile} tipoperfil={tipoperfil}  />

                <S.ContainerProfileInfo>
                        <h1>{username}</h1>
                        {tipoperfil == "B2B"?(
                                <S.ContainerTags>
                                     <S.TagsProfile>Tag</S.TagsProfile>
                                     <S.TagsProfile>Categoria</S.TagsProfile>
                                </S.ContainerTags>
                                ) : null
                        }
                </S.ContainerProfileInfo>

	</S.ContainerProfile>
);

export default Profile;