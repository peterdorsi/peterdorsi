/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Content from './Content';
import Description from './Description';

const Intro = styled(Content)`
  ${tw('py-8 md:py-16')};
`;

const Title = styled.h1`
  ${tw('text-3xl md:text-5xl')};
  span {
    ${tw('text-orange')};
  }
`;

const Social = styled.section`
  ${tw('flex flex-wrap items-center justify-center sm:justify-start mt-8')};
`;

const Button = styled(OutboundLink)`
  ${tw(
  'cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline'
)};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`;

const Homepage = styled(Button)`
  ${tw('bg-indigo text-white')};
`;

const GitHub = styled(Button)`
  ${tw('bg-grey-dark text-white sm:mx-4 my-4 sm:my-0')};
`;

const Twitter = styled(Button)`
  ${tw('bg-blue text-white')};
`;

const Header = () => {
  return (
    <Intro>
      <Title>
        Hi
        <span>.</span>
      </Title>
      <Description>
        <p>
          I'm Peter D'Orsi
          <span>.</span> <br />
          Director of Product at Portfolium and previously a Engineering Manager, UX Lead, Frontend Engineer and Creative Strategist Director elsewhere
          <span>.</span> Outside of work I enjoy playing a ton of video games, rescuing pugs, trying exotic cuisines and exploring with my family
          <span>.</span>
        </p>
      </Description>
      <Social>
        <Homepage role="button" href="https://www.peterdorsi.com">
          Homepage
        </Homepage>
        <GitHub role="button" href="https://github.com/peterdorsi">
          GitHub
        </GitHub>
        <Twitter role="button" href="https://twitter.com/peterdorsi">
          Twitter
        </Twitter>
      </Social>
    </Intro>
  );
};

export default Header;
