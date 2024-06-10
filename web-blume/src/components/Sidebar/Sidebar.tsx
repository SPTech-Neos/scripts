import React, {useContext, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

import * as S from './sidebar.styled';

import { Bell, GearSix, House, MagnifyingGlass, Receipt, UserCircle, Cube, Article, UserList } from "@phosphor-icons/react";
import { SignOut } from "phosphor-react";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";
import { ClientResponseDto } from "../../utils/Users/Client/client.types";


const Sidebar: React.FC = () => {
    const { handleLogoutEmployee, isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { handleLogoutClient, isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
    const { handleLogoutEstablishment, isAuthenticated: isAuthenticatedEstablishment } = useContext(AuthContextEstablishment);

    const tokenEmployeeFromCookie = Cookies.get('employeeInfo');
    const tokenEmployee: EmployeeResponseDto = tokenEmployeeFromCookie ? JSON.parse(tokenEmployeeFromCookie) : null;

    const tokenClientFromCookie = Cookies.get('clientInfo');
    const tokenClient: ClientResponseDto = tokenClientFromCookie ? JSON.parse(tokenClientFromCookie) : null;
    
    let handleLogout: () => void;
    let theme: string = '';

    if(isAuthenticatedEstablishment){
        theme = "employee";
        handleLogout = handleLogoutEstablishment;
    } else if(isAuthenticatedEmployee) {
        theme = "employee";
        handleLogout = handleLogoutEmployee;
        
    } else {
        theme = "client";
        handleLogout = handleLogoutClient;
    }
    
    const location = useLocation();
    console.log(location);
    const iconeAtual = document.getElementsByTagName("a");
    useEffect(() =>{
        
        for(let i = 0; i < iconeAtual.length; i++){
            if(iconeAtual[i].pathname == location.pathname){
                iconeAtual[i].classList.add('active-location');
                console.log(iconeAtual[i].pathname);
                console.log(location.pathname);
            }
            console.log("THEME " + theme);
            console.log(isAuthenticatedClient + "client")
            console.log(isAuthenticatedEmployee + "employee")
        }
    })
    
    return (

        <S.SidebarWrapper theme={theme}>
            <S.Container direction="column">
 
                <S.NavList>
                    <S.NavItem>
                        <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <House size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                </S.NavList>

                <S.NavList>
                    <S.NavItem>
                        <S.NavLink to={theme == "employee"? "/services" : "/feed"} className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                        {theme == "establishment" || theme == "employee"?(
                                <Article size={24} />
                            ) :
                            <MagnifyingGlass size={24}/>
                        }
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/employees" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            {theme == "establishment" || theme == "employee"?(
                                <UserList size={24}/>
                            ) :                            
                                null
                            }
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to={`/orders/${tokenClient?.clientId || tokenEmployee?.employeeId}`} className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <Receipt size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    {theme == "establishment" || theme == "employee"?(
                                <S.NavItem>
                                <S.NavLink to= '/products' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                    <Cube size={24}/>
                                </S.NavLink>
                        </S.NavItem>
                    ) : null}
                </S.NavList>

                <S.NavList>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <Bell size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <GearSix size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to={"/" + theme} className={({isActive})=>isActive? "nav-link active " : "nav-link"}>
                            <UserCircle size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to={"/"} className={({isActive})=>isActive? "nav-link active" : "nav-link"} onClick={() => handleLogout()}>
                            <SignOut size={24} />
                        </S.NavLink>
                    </S.NavItem>
                </S.NavList>

            </S.Container>
        </S.SidebarWrapper>
    );
};

export default Sidebar;
