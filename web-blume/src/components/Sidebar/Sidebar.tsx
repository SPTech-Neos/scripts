import React, {useContext, useEffect} from "react";

import { useLocation } from "react-router-dom";
import * as S from './sidebar.styled';

import { Bell, GearSix, House, MagnifyingGlass, Receipt, ShoppingCart, UserCircle, Cube, Article, UserList } from "@phosphor-icons/react";
import { SignOut } from "phosphor-react";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";


const Sidebar: React.FC = () => {
    const { handleLogoutEmployee, isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { handleLogoutClient, isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
    const { handleLogoutEstablishment, isAuthenticated: isAuthenticatedEstablishment } = useContext(AuthContextEstablishment);
    
    let handleLogout: () => void;
    let theme: string = '';

    if(isAuthenticatedEstablishment){
        theme = "employee";
        handleLogout = handleLogoutEstablishment;
    } else if(isAuthenticatedEmployee) {
        theme = "employee";
        handleLogout = handleLogoutEmployee;
        
    } else if(isAuthenticatedClient) {
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
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                        {location.pathname == "/establishment" || location.pathname == "/employee"?(
                                <Article size={24} />
                            ) :
                            <MagnifyingGlass size={24}/>
                        }
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            {location.pathname == "/establishment" || location.pathname == "/employee"?(
                                <UserList size={24}/>
                            ) :                            
                                <ShoppingCart size={24}/>
                            }
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <Receipt size={24}/>
                        </S.NavLink>
                    </S.NavItem>
                    {location.pathname === "/establishment" || location.pathname == "/employee"?(
                                <S.NavItem>
                                <S.NavLink to= '/' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
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
