import React from 'react';
import  styled from 'styled-components';
import  tw  from 'twin.macro';

import McImg from "../../../assets/images/mclaren-orange-big.png"
import BlobImg from "../../../assets/images/blob.svg"
import { SCREENS } from '../../components/responsive/index';
import { Button } from '../../components/button';
const TopSectionContainer =styled.div`
    min.height:400px;
    margin-top : 6em;
    ${tw`
      w-full
      max-w-screen-2xl
      flex
      justify-between
      lg:pl-12 
      lg:pr-12
      pl-3 
      pr-3
    `};
`;

const LeftContainer=styled.div`
    ${tw`
      w-1/2
      flex
      flex-col 

    `};
`;

const RightContainer=styled.div`
    ${tw`
      w-1/2
      flex
      flex-col 
      relative
      mt-20
    `};
`;

const Slogan=styled.h1`
    ${tw`
      font-extrabold
      text-2xl 
      xl:text-6xl 
      sm:text-3xl
      md:text-5xl 
      lg:font-black 
      lg:font-bold 
      md:font-extrabold 
      text-black 
      mb-4 
      sm:leading-snug 
      lg:leading-normal 
      xl:leading-relaxed
    `};
`;

const Description =styled.p`
  ${tw`
    text-xs 
    lg:text-sm 
    xl:text-lg 
    sm:max-h-full 
    overflow-hidden 
    max-h-12 
    text-gray-800
    `};
  `;
   
const BlobContainer = styled.div`
    width : 20em;
    height : 10em ;
    position : absolute ;
    right : -5em ;
    top : -9em;
    z-index: -1;
    transform : rotate(-30deg);
    
      img{
        width :100%;
        height :auto;
        max-height: max-content;
  }
    
    @media (min-width : ${SCREENS.sm}){
      width : 40em; 
      max-height : 10em;
      right : -9em;
      top : -16em;
      transform : rotate(-25deg);
    }

    @media (min-width : ${SCREENS.lg}){
      width : 50em; 
      max-height : 30em;
      right : -7em;
      top : -15em;
      transform : rotate(-25deg);
    }

    @media (min-width : ${SCREENS.xl}){
      width : 70em; 
      max-height : 30em;
      right : -15em;
      top : -25em;
      transform : rotate(-20deg);
    }
  `;
  const StandaloneCar =styled.div`
      width : auto;
      height : 10em ;
      right : -6em ;
      top : -5em;
      position : absolute;

        img{
          width:auto;
          height: 100%;
          max-width : fit-content;
    }
 
    @media (min-width : ${SCREENS.sm}){
      height : 16em;
      right : -6em;
      top : -6em;
      
    }
    @media (min-width : ${SCREENS.lg}){
      height : 21em;
      right : -8em;
      top : -5em;
      
    }
    @media (min-width : ${SCREENS.xl}){
      height : 30em;
      right : -13em;
      top : -9em;
      
    }
    `
  const ButtonsContainer =styled.div`
    ${tw`
      flex 
      flex-wrap
      mt-5
      `}
  `   
export function TopSection(){
  return( 
  <TopSectionContainer>
    <LeftContainer>
        <Slogan>Meilleure qualité de location de voiture en Tunisie </Slogan>
        <Description>
        Choisissez toujours la meilleure voiture dans nos magasins locaux 
        ou commandez-la à distance au meilleur prix pour vous et obtenez les voitures 
        de la meilleure qualité aussi longtemps que vous le souhaitez
        </Description>
        <ButtonsContainer>
          <Button text="Reservez votre voiture "/>
          <Button theme="filled" text="Voir toutes nos offres"/>
        </ButtonsContainer>
    </LeftContainer>
    <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
          <img src={McImg} />
        </StandaloneCar>
    </RightContainer>
  </TopSectionContainer>
  )}
