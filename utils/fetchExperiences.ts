import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `/api/getExperience`,
  );
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};
