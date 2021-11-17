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
        dailyPrice: 150,
        monthlyPrice :3800,
        gearType:"Manuelle",
        gas:"Essence"
    }

    const testCar2 :ICar ={
        name: "Clio diesel ",
        mileage:" 9K",
        thumbnailSrc:"https://www.automobile-magazine.fr/asset/cms/840x394/186332/config/134647/renault-clio-e-tech-limited-2021.webp?webp=1",
        dailyPrice: 120,
        monthlyPrice :3200,
        gearType:"Manuelle",
        gas:"Essence"
    }
    const testCar3 :ICar ={
      name: "Kia picanto",
      mileage:" 50K",
      thumbnailSrc:"https://www.auto-plus.tn/assets/modules/newcars/kia/picanto/couverture/kia_picanto.jpg",
      dailyPrice: 80,
      monthlyPrice :2100,
      gearType:"Manuelle",
      gas:"Essence"
  }
  const testCar4 :ICar ={
    name: "Citroen C3",
    mileage:" 120K",
    thumbnailSrc:"https://www.auto-plus.tn/assets/modules/newcars/citroen/c3/couverture/citroen-c3.jpg",
    dailyPrice: 80,
    monthlyPrice :2000,
    gearType:"Manuelle",
    gas:"Essence"
}
    const cars =[ 
      <Car {...testCar3} />,
      <Car {...testCar2} />,
      <Car {...testCar3} />,
      <Car {...testCar1} />,
      <Car {...testCar4} />,
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