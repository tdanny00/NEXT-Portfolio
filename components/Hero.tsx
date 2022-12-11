import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};
export const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["<Daniel Tolgyesi./>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col justify-center text-center space-y-8 items-center overflow-hidden"
    >
      {/*<img*/}
      {/*  src={*/}
      {/*    "https://media-exp1.licdn.com/dms/image/D4D03AQGkE5jbputQJA/profile-displayphoto-shrink_800_800/0/1670179828207?e=2147483647&v=beta&t=Pwf-ls-3E54zlrnpj2QdUBx-JYvFK_x5YklqqvGnx84"*/}
      {/*  }*/}
      {/*  className="rounded-full w-56 h-56 relative mx-auto object-cover"*/}
      {/*  alt={"daniel_pfp"}*/}
      {/*/>*/}
      <div>
        <h1 className="uppercase font-light space-x-2 text-gray-400 text-xl">
          Junior Software Developer
        </h1>
      </div>
      <h1 className="text-4xl font-bold">
        <span>{text}</span>
        <Cursor cursorColor="#ff9d00" />
      </h1>
    </motion.div>
  );
};
