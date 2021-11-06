import { faEnvelope, faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import styled from 'styled-components';
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer=styled.div`
    background-color: #1D2124;
    //min-height :24em;
    ${tw`
      flex
      flex-col
      min-w-full
      pt-10
      md:pt-12
      items-center
      justify-center
      
    `}
`
const InnerContainer =styled.div`
  ${tw`
     max-w-screen-2xl 
     flex
     flex-wrap
     h-full
     w-full
     ml-4
     justify-center
  `}
`
const AboutContainer= styled.div`
    ${tw`
      flex
      flex-col  
      mr-2
      md:mr-16
      pl-10 
      pr-10 
      md:pl-3 
      md:pr-3
    `}
`

const BottomContainer = styled.div`
  ${tw`
    flex
    mt-5
  `}
`

const CopyRightText=styled.small`
  font-size : 13px;
  ${tw`
    text-gray-400
    pb-3
  `}
`
const AboutText =styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`
const SectionContainer=styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    pl-10 
    pr-10
    mr-2
    md:mr-16
    md:pl-3 
    md:pr-3
    mt-7 
    md:mt-0
  `}
`
const LinksList=styled.ul`
  ${tw`
    outline-none  
    list-none
    flex
    flex-col
  `}
`
const ListItem=styled.li`
  ${tw`
    mb-3
  `}
  & > a{
    ${tw`
    text-xs
    text-white
    hover:text-red-500 
    transition-all
        
    `}}
  
`

const HeaderTitle=styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `}
`
const HorizontalContainer=styled.div`
    ${tw`
      flex 
      items-center
    `}

`
const RedIcon =styled.span`
    ${tw`
      w-8 
      h-8
      rounded-full 
      flex 
      items-center 
      justify-center 
      text-white 
      text-base
      mr-2 
      bg-red-500
    `}

`

const SmallText =styled.h6 `
    ${tw`
      text-white
      text-sm
    `}

`
export function Footer (){
    return <FooterContainer>
      <InnerContainer >
        <AboutContainer>
            <Logo color="white" bgColor="dark"/>
            <AboutText>Karahabtek est un site de location situé en Tunisie qui dispose de services de haute qualité et haut de gamme  </AboutText>
        </AboutContainer>
        <SectionContainer>     
            <HeaderTitle>Nos liens </HeaderTitle>
            <LinksList>
                <ListItem><a href="#">Acceuil</a></ListItem>
                <ListItem><a href="#">Services</a></ListItem>
                <ListItem><a href="#">Voiures</a></ListItem>
                <ListItem><a href="#">A propos de nous</a></ListItem>
            </LinksList>
        </SectionContainer>

        <SectionContainer>     
            <HeaderTitle>Autres liens</HeaderTitle>
            <LinksList>
                <ListItem><a href="#">FAQ</a></ListItem>
                <ListItem><a href="#">Contactez nous</a></ListItem>
                <ListItem><a href="#">Support</a></ListItem>
                <ListItem><a href="#">Politique de confidentialité</a></ListItem>
                <ListItem><a href="#">Termes &amp; Conditions </a></ListItem>
            </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Appelez-nous</HeaderTitle>
          <HorizontalContainer>
              <RedIcon>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </RedIcon>
              <SmallText>+216 00 00 00 00 </SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Email</HeaderTitle>
          <HorizontalContainer>
              <RedIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </RedIcon>
              <SmallText>contact@karhabtek.tn.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyRightText>Copyright &copy;  {new Date().getFullYear()} Karahabtek . All rights reserved</CopyRightText>
      </BottomContainer>
    </FooterContainer>
}