import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment className="container">
      <h1 className="facts-header text-capitalize text-center">
        Facts about SpaceX
      </h1>
      <article className="facts text-justify">
        Space Exploration Technologies Corp., t/a SpaceX, is an American
        aerospace manufacturer and space transportation services company
        headquartered in Hawthorne, California. It was founded in 2002 by Elon
        Musk with the goal of reducing space transportation costs to enable the
        colonization of Mars. SpaceX has developed several launch vehicles, the
        Starlink satellite constellation, the Dragon cargo spacecraft, and flown
        humans to the International Space Station on the Crew Dragon Demo-2.
      </article>

      <article className="facts text-justify">
        SpaceX's achievements include the first privately funded
        liquid-propellant rocket to reach orbit (Falcon 1 in 2008), the first
        private company to successfully launch, orbit, and recover a spacecraft
        (Dragon in 2010), the first private company to send a spacecraft to the
        International Space Station (Dragon in 2012), the first Vertical
        take-off and vertical propulsive landing for an orbital rocket (Falcon 9
        in 2015), the first reuse of an orbital rocket (Falcon 9 in 2017), the
        first private company to launch an object into orbit around the Sun
        (Falcon Heavy's payload of a Tesla Roadster in 2018), and the first
        private company to send astronauts to orbit and to the International
        Space Station (SpaceX Crew Dragon Demo-2 mission in 2020). SpaceX has
        flown 20 cargo resupply missions to the International Space Station
        (ISS) under a partnership with NASA, as well as an uncrewed
        demonstration flight of the human-rated Dragon 2 spacecraft (Crew
        Demo-1) on 2 March 2019, and the first crewed Dragon 2 flight on 30 May
        2020.
      </article>

      <article className="facts text-justify">
        In December 2015, a Falcon 9 accomplished a propulsive vertical landing.
        This was the first such achievement by a rocket for orbital spaceflight.
        In April 2016, with the launch of SpaceX CRS-8, SpaceX successfully
        vertically landed the first stage on an ocean drone ship landing
        platform. In May 2016, in another first, SpaceX again landed the first
        stage, but during a significantly more energetic geostationary transfer
        orbit mission. In March 2017, SpaceX became the first to successfully
        re-launch and land the first stage of an orbital rocket. In January
        2020, with the third launch of the Starlink project, SpaceX became the
        largest commercial satellite constellation operator in the world.
      </article>

      <article className="facts text-justify">
        In September 2016, Musk unveiled the Interplanetary Transport System —
        subsequently renamed Starship — a privately funded launch system to
        develop spaceflight technology for use in crewed interplanetary
        spaceflight. In 2017, Musk unveiled an updated configuration of the
        system which is intended to handle interplanetary missions plus become
        the primary SpaceX orbital vehicle after the early 2020s, as SpaceX has
        announced it intends to eventually replace its existing Falcon 9 launch
        vehicles and Dragon space capsule fleet with Starship, even in the
        Earth-orbit satellite delivery market. Starship is planned to be fully
        reusable and will be the largest rocket ever on its debut, scheduled for
        the early 2020s.
      </article>
    </Fragment>
  );
};

export default About;
