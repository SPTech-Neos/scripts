import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DetailsSection from "../../sections/Details/Details";
import * as S from './details.styled';

const Details: React.FC = () => {
    return(
        <S.DetailsSection>
            <Sidebar />
            <DetailsSection />
        </S.DetailsSection>
    );
}

export default Details;