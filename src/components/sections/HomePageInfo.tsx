"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

// interface Props { }

const HomePageInfo = ({}) => {
  return (
    <section className="py-24">
      <div className="container flex flex-col justify-center justify-items-center content-center items-center py-8">
        <div>
          <Avatar
            src="https://media.licdn.com/dms/image/D5603AQHcOb9fy9hi0g/profile-displayphoto-shrink_200_200/0/1665176007899?e=1709769600&v=beta&t=FQZLHKmANpN-QJKDMLPSply128Pyy_us22MLny8W3yQ"
            className="w-56 h-56 text-large"
          />
        </div>
        <h1 className="text-6xl lg:text-8xl font-semibold text-center py-8">
          Alex Roth
        </h1>
        <p className="text-center text-lg py-4">Frontend Engineer</p>
        {/* <div className="flex flex-row justify-center py-8">
                    <Icon />
                </div> */}
        <p className="text-center text-lg py-8 px-8 lg:px-44">
          A Full Stack Front-end Developer based in the KC Metro area.
          Meticulous web developer with over 5 years of front end experience and
          passion for responsive and mobile-first website design.
        </p>
      </div>
    </section>
  );
};

export default HomePageInfo;
