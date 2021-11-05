import React,{useState} from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel,{ Dots ,slidesToShowPlugin } from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const TopCarsContainer =styled.div`
    ${tw`
      max-w-screen-lg 
      w-full
      flex 
      flex-col
      items-center 
      justify-center 
      pr-4 
      pl-4 
      md:pl-0 
      md:pr-0 
      mb-10
    `};
`;
const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-bold
  `};
`;
const CarsContainer = styled.div`
  ${tw`
    w-full 
    flex 
    flex-wrap 
    justify-center 
    mt-7 
    md:mt-10 
  `};
`;

export function TopCars(){

    const [current, setCurrent]=useState(0);


    const testCar1 :ICar ={
        name: "Audi S3 ",
        mileage:" 10K",
        thumbnailSrc:"https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png",
        dailyPrice: 70,
        monthlyPrice :1600,
        gearType:"Auto",
        gas:"Petrol"
    }

    const testCar2 :ICar ={
        name: "Audi A4 ",
        mileage:" 10K",
        thumbnailSrc:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.guideautoweb.com%2Fconstructeurs%2Faudi%2Fa4%2F2020%2Fspecifications%2F45-tfsi-technik%2F&psig=AOvVaw2RMRv-mguF9WroPT_-3S4y&ust=1635981314809000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJiRgbvn-vMCFQAAAAAdAAAAABAU",
        dailyPrice: 70,
        monthlyPrice :1600,
        gearType:"Auto",
        gas:"Petrol"
    }

    const cars =[ 
      <Car {...testCar1} />,
      <Car {...testCar2} />,
      <Car {...testCar1} />,
      <Car {...testCar2} />,
      <Car {...testCar1} />
    ]

    const isMobile=useMediaQuery({maxWidth: SCREENS.sm});
    const numberOfDots= isMobile ? cars.length : Math.ceil(cars.length /3)
    return (
        <TopCarsContainer>
            <Title>Découvrez nos meilleures offres</Title>
            <CarsContainer>
              <Carousel 
              value={current} 
              onChange={setCurrent} 
              slides={cars}
              plugins={[
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options:{
                    numberOfSlides: 3,
                  }
                }
              ]}
              breakpoints={{
                640: {
                  plugins: [
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 1
                     }
                   },
                 ]
                },
                900: {
                  plugins: [
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 2
                     }
                   },
                 ]
                }
              }}
              />
              <Dots value={current} onChange={setCurrent} number={ numberOfDots } />
            </CarsContainer>
        </TopCarsContainer>
    )
}