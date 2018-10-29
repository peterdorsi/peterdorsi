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

const Linkedin = styled(Button)`
  ${tw('bg-indigo text-white sm:mx-4 my-4')};
`;

const GitHub = styled(Button)`
  ${tw('bg-grey-dark text-white sm:mx-4 my-4 sm:my-0')};
`;

const Twitter = styled(Button)`
  ${tw('bg-blue text-white sm:mx-4 my-4 sm:my-0')};
`;

const Steam = styled(Button)`
  ${tw('bg-black text-white sm:mx-4 my-4 sm:my-0')};
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
          Director of Product at <OutboundLink href="https://www.portfolium.com/">Portfolium</OutboundLink> and previously held tiles like: Engineering Manager, UX Lead, Frontend Engineer and Director of Creative Strategies
          <span>.</span>
        </p>
        <p>
        He successfully finished a 48oz steak and was a 2011 Geekadelphia Award Nominee
        <span>.</span>
        </p>
        <p>
        Outside of work I enjoy playing a ton of video games, rescuing pugs, trying exotic cuisines and exploring with my family
        <span>.</span>
        </p>
      </Description>
      <Social>
        <Linkedin role="button" href="https://www.linkedin.com/in/peterdorsi">
          Linked In
        </Linkedin>
        <GitHub role="button" href="https://github.com/peterdorsi">
          GitHub
        </GitHub>
        <Twitter role="button" href="https://twitter.com/peterdorsi">
          Twitter
        </Twitter>
        <Steam role="button" href="https://steamcommunity.com/id/moskrilla">
          Steam
        </Steam>
      </Social>
    </Intro>
  );
};

export default Header;
