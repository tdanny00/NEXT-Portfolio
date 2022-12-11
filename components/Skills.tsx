import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const htmlPercentage = 66;
type Props = {};
export const Skills = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen mx-auto justify-evenly items-center md:text-left md:flex-row max-w-7xl">
      <h3 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-widest">
        Skills
      </h3>
      <div className="font-bold text-5xl">:)</div>
    </div>
  );
};
