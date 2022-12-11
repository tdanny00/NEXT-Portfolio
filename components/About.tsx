import React from "react";
import { motion } from "framer-motion";

type Props = {};
export const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen justify-evenly items-center">
      <h3 className="text-2xl text-gray-500 uppercase tracking-widest">
        about
      </h3>
      <motion.img
        transition={{ duration: 0.65 }}
        initial={{
          x: -200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/D4D03AQGkE5jbputQJA/profile-displayphoto-shrink_800_800/0/1670179828207?e=2147483647&v=beta&t=Pwf-ls-3E54zlrnpj2QdUBx-JYvFK_x5YklqqvGnx84"
        alt="me"
        className="-mb-10 mb: w-52 mb: h-52  flex-shrink-0 rounded-full "
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-5 px-0 md:px-10 text-center px-5"
      >
        <h4 className="text-2xl font-light">Infos about me :)</h4>
        <p className="text-sm">
          I am Dániel Tölgyesi, a third-year Computer science engineer student
          from Hungary. I love challenges and I adapt well for the new
          situations. I have an Advanced State Recognized English (C1) complex
          language exam. In my high school years I went into a billingual class
          where I graduated from mathematics and history in English. I would
          characterize myself as a great team member and I can compete things
          well in solo too.
        </p>
      </motion.div>
    </div>
  );
};
