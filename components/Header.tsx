import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};
export const Header = (props: Props) => {
  return (
    <header
      className="sticky top-0  flex items-start
        p-2 justify-between max-w-7xl mx-auto z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sn text-gray-400">
          Contact me
        </p>
      </motion.div>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/*Social Icons*/}
        <SocialIcon
          url={
            "https://hu.linkedin.com/in/d%C3%A1niel-t%C3%B6lgyesi-911b58229?trk=people-guest_people_search-card"
          }
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url={"https://www.youtube.com/"}
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url={"https://github.com/tdanny00?tab=repositories"}
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
};
