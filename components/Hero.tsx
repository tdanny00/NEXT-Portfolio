import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};
export const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["<Daniel Tolgyesi./>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div className="h-screen flex flex-col justify-center text-center space-y-8 items-center overflow-hidden">
      <div className="py-5 ml:flex">
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Link href="#about">
            <button className="navButtons">About</button>
          </Link>
        </motion.div>{" "}
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
        >
          <Link href="#about">
            <button className="navButtons">Experiences</button>
          </Link>
        </motion.div>{" "}
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
        >
          <Link href="#about">
            <button className="navButtons">Skills</button>
          </Link>
        </motion.div>{" "}
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
        >
          <Link href="#about">
            <button className="navButtons">Contact</button>
          </Link>
        </motion.div>
      </div>
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
      ></motion.div>
      <h1 className="text-4xl font-bold">
        <span>{text}</span>
        <Cursor cursorColor="#ff9d00" />
      </h1>
      <h1 className="uppercase font-light space-x-2 text-gray-400  ">
        Junior Software Developer
      </h1>
    </motion.div>
  );
};
