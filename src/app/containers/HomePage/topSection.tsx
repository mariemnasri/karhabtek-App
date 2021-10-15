import React from 'react';
import  styled from 'styled-components';
import  tw  from 'twin.macro';

const topSectionContainer =styled.div`
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
      font-bold
      text-2xl 
      xl:text-6xl 
      sm:text-3xl
      md:text-5xl 
      ld:font-black 
      md:font-extrabold 
      text-black 
      mb-4 
      sm:leading-snug 
      ld:leading-normal 
      xl:leqding-relaxed
    `};
`;
export function TopSection(){

}
