import React, {useContext, useEffect} from "react";

import { useLocation } from "react-router-dom";
import * as S from './sidebar.styled';

import { Bell, GearSix, House, MagnifyingGlass, Receipt, ShoppingCart, UserCircle, Cube, Article, UserList } from "@phosphor-icons/react";
import { SignOut } from "phosphor-react";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";



const Sidebar: React.FC<S.sidebarProps> = ({color, tipoperfil}) => {
    const { handleLogoutEmployee } = useContext(AuthContextEmployee);

    const location = useLocation();
    useEffect(() =>{
        // console.log("location: " + location.pathname);
        const iconeAtual = document.getElementsByTagName("a");
        console.log(iconeAtual);
    
        for(let i = 0; i < iconeAtual.length; i++){
            if(iconeAtual[i].pathname == location.pathname){
                iconeAtual[i].classList.add('active-location');
                console.log(iconeAtual[i].pathname);
                console.log(location.pathname);
            }
        }
    })

    return (

        <S.SidebarWrapper color={color}>
            <S.Container direction="column">
 
                    <S.NavList>
                        <S.NavItem>
                            <S.NavLink  to= '/Feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <House size={24}/>
                            </S.NavLink>
                        </S.NavItem>
                    </S.NavList>

                    <S.NavList>
                        <S.NavItem>
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                             {location.pathname == "/ProfileB2B"?(
                                    <Article size={24} />
                                ) :
                                <MagnifyingGlass size={24}/>
                             }
                            </S.NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                {location.pathname == "/ProfileB2B"?(
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
                        {location.pathname == "/ProfileB2B"?(
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
                            <S.NavLink to={tipoperfil == 'B2B'? "/ProfileB2B" : "/ProfileB2C"} className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                <UserCircle size={24}/>
                            </S.NavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink to={"/"} className={({isActive})=>isActive? "nav-link active" : "nav-link"} onClick={() => handleLogoutEmployee()}>
                                <SignOut size={24} />
                            </S.NavLink>
                        </S.NavItem>
                    </S.NavList>

            </S.Container>
        </S.SidebarWrapper>
    );
};

export default Sidebar;
