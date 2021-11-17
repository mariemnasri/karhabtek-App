import React from 'react';
import styled, { css }  from 'styled-components';
import  tw  from 'twin.macro';
import {slide  as Menu} from 'react-burger-menu';
import {useMediaQuery} from "react-responsive"
import { SCREENS } from '../responsive/index';
import menuStyles from './menuStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
const ListContainer = styled.ul`
    ${tw`
      flex
      list-none    
    `};
`;

const NavItem = styled.li<{ menu?:any }>`
    ${tw`
      text-sm
      md:text-base
      text-black
      font-medium 
      mr-1
      md:mr-5
      cursor-pointer
      transition
      duration-300
      ease-in-out
      hover:text-gray-700
    `};

    ${({menu })=> menu && css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white`}
    `};
`;


export function NavItems(){

    const isMobile=useMediaQuery({maxWidth: SCREENS.sm});

    if (isMobile)
    return(
    <Menu right styles={menuStyles}>
        <ListContainer>
        <NavItem menu>
            <a href="#">Accueil</a>
        </NavItem>
        <NavItem menu>
            <a href="#">Voitures</a>
        </NavItem>
        <NavItem menu>
            <a href="#">Services</a>
        </NavItem>
        <NavItem menu>
            <a href="#">Contact</a>
        </NavItem>
        </ListContainer>
    </Menu>
    );
    return (
    <ListContainer>
        <NavItem>
            <a href="#">Accueil</a>
        </NavItem>
        <NavItem>
            <a href="#">Voitures</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact</a>
        </NavItem>
        <NavItem>
            <a href="#" >
            <FontAwesomeIcon icon={faUserAlt}/></a>
        </NavItem>
    </ListContainer>
    );
}