import React from "react";
import { useMediaQuery } from "react-responsive";
import { device } from "../../styles/breakpoints.styled";

import * as S from "./footer.styled";

import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import { PrimaryButton, MoveButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import Link from "../../components/Texts/Link/Link";

import logoBlumeFooter from "../../assets/blume-footer.svg";
import logoNeosFooter from "../../assets/neos-footer.svg";
import googlePlayBadge from "../../assets/google-play-badge.svg";
import Icon from "../../components/Images/Icon/Icon";

import {
  CaretDoubleUp,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const Footer: React.FC<S.FooterProps> = () => {
  const isTabletOrMobile = useMediaQuery({ query: device.tablet });

  return (
    <S.Footer id="footer">
      <S.Container direction="column">
        <S.Row className="h-75">
          <S.ColGroup>
            <S.Col className="align-center mr-100">
              <img
                className="logo-blume-footer"
                src={logoBlumeFooter}
                alt={`Imagem svg com detalhes de circulos no fundo`}
              />
            </S.Col>
            <S.Col>
              <Subtitle size="lg" weight={500}>
                Sobre
              </Subtitle>

              <S.NavList>
                <S.NavItem>
                  <S.NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Início
                  </S.NavLink>
                </S.NavItem>
                <S.NavItem>
                  <S.NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    O que é
                  </S.NavLink>
                </S.NavItem>
                <S.NavItem className="nav-item">
                  <S.NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Serviços
                  </S.NavLink>
                </S.NavItem>
              </S.NavList>
            </S.Col>

            {isTabletOrMobile ? null : (
              <S.Col>
                <Subtitle size="lg" weight={500}>
                  Sistema
                </Subtitle>

                <S.NavList>
                  <S.NavItem>
                    <S.NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Feed
                    </S.NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <S.NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Perfil
                    </S.NavLink>
                  </S.NavItem>
                  <S.NavItem className="nav-item">
                    <S.NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Pesquisar
                    </S.NavLink>
                  </S.NavItem>
                  <S.NavItem className="nav-item">
                    <S.NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Carrinho
                    </S.NavLink>
                  </S.NavItem>
                </S.NavList>
              </S.Col>
            )}

            {isTabletOrMobile ? null : (
              <MoveButton moveTo={"#home"}>
                <Icon>
                  <CaretDoubleUp size={32} />
                </Icon>
              </MoveButton>
            )}
          </S.ColGroup>

          <S.Col className="align-center">
            {isTabletOrMobile ? null : (
              <Link href="/auth?mode=login">
                  <PrimaryButton size={"md"} width={"190px"}>
                    Entrar
                  </PrimaryButton>
              </Link>
              
            )}

            <img
              className="google play badge"
              src={googlePlayBadge}
              alt={`Imagem svg com detalhes de circulos no fundo`}
            />
          </S.Col>

        </S.Row>

        <S.Row className="h-25">
          <img
            className="logo-neos-footer"
            src={logoNeosFooter}
            alt={`Imagem svg com detalhes de circulos no fundo`}
          />

          <S.SvgGroup>
            <Icon route="/github">
              <GithubLogo size={32} />
            </Icon>
            <Icon route="/instagram">
              <InstagramLogo size={32} />
            </Icon>
          </S.SvgGroup>
        </S.Row>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
