import React from "react";
import { motion } from "framer-motion";

type Props = {};
export const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md: text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" top-16 uppercase text-2xl text-gray-500">About</h3>
      <motion.img
        transition={{ duration: 1.2 }}
        initial={{
          x: -200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        src="https://media-exp1.licdn.com/dms/image/D4D03AQGkE5jbputQJA/profile-displayphoto-shrink_800_800/0/1670179828207?e=2147483647&v=beta&t=Pwf-ls-3E54zlrnpj2QdUBx-JYvFK_x5YklqqvGnx84"
        alt="me"
        className="mb: w-56 mb: h-56  flex-shrink-0 rounded-full "
      />

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="space-y-5 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">Infos about me :)</h4>
        <p className="text-sm">
          I am Dániel Tölgyesi, a third-year Computer science engineer student
          from Hungary. I love challenges and I adapt well for the new
          situations. I am open for learning and I like to obtain new knowledge
          about everything. I have an Advanced State Recognized English (C1)
          complex language exam. In My high school years I went into a
          billingual class where I graduated from mathematics and history in
          English. I would characterize myself as a great team member and I can
          compete things well in solo. I have a vivid and precise working
          ability too.
        </p>
      </motion.div>
    </div>
  );
};
