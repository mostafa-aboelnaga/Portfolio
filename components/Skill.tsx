import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20
        filter group-hover:grayscale transition duration-200 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-90 transition duration-300
      ease-in-out group-hover:bg-[#0aacf7] w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-lg z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
