import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { SCREENS } from '../../components/responsive/index';
import JeepImg from "../../../assets/images/jeep.png"

const AboutUsContainer = styled.div`
    ${tw`
      w-full 
      flex 
      flex-wrap 
      items-center 
      justify-center 
      pt-4 
      pb-4 
      pr-7 
      pl-7 
      md:pr-0 
      md:pl-0
      bg-white 
    `}
`

const CarContainer =styled.div`
    width: auto ;
    height : 15em;
    margin-left : -50px;

    img{
        width: auto; 
        height: 100%;
    }
    @media(min-width: ${SCREENS.md}){
        height : 28em;
    }

    @media(min-width: ${SCREENS.lg}){
        height : 30em;
    }

    @media(min-width: ${SCREENS["2xl"]}){
        height : 35em;
        margin-left:0;
    }
`
const InfoContainer = styled.div`
    ${tw`
      md:w-1/2 
      flex 
      flex-col 
      md:ml-6 
      2xl:ml-16 
    `}
`
const Title= styled.h1`
    ${tw`
      text-black 
      text-2xl 
      md:text-5xl 
      font-extrabold 
      md:font-black 
      md:leading-normal
    `}
`

const InfoText= styled.p`
    ${tw`
      md:max-w-2xl
      text-sm 
      md:text-base 
      text-gray-500 
      font-normal
      mt-4 
    `}
`

export function AboutUs(){
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} />
            </CarContainer>
            <InfoContainer>
                <Title>Vivez la meilleure expérience avec nos offres de location</Title>
                <InfoText>
                    C'est le premier site web Tunisien qui vous donne cette belle éxperience 
                    a vivre ne la rater pas , 
                    Vous pouvez choisir la voiture qui vous plait , la réservez et la louer <br/>
                    On vous facilite la vie , on vous garantit une vie meilleure .<br/>
                    ant du sens est source de distractions, et empêche de se concentrer sur 
                    la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 
                    Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou 
                    moins normale, et en tout cas 
                    
               </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )

}