import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
     flex-shrink-0 w-[500px] md:w-[600px]
     snap-center bg-[#292929] px-10 py-8 opacity-40 hover:opacity-100 
     cursor-pointer transition-opacity duration-200
     overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex-shrink-0 w-32 h-32 rounded-full xl:w-[125px] xl:h-[125px] object-scale-down bg-white border-4 border-[#0aacf7] object-center"
        src={urlFor(experience.companyImage).url()}
        alt={experience.company}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-center">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-2 text-center">
          {experience.company}
        </p>
        <div className="flex flex-wrap gap-2 justify-center space-x-2 my-3">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 object-cover"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-center">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 p-4 ml-7 mb-2 text-sm text-left">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
