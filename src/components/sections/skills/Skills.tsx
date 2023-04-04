import { client } from '@/lib/client';
import { useEffect, useState } from 'react';
import ExperienceCard from '../../cards/experience/ExperienceCard';
import SkillCard from '../../cards/skill/SkillCard';

export interface ISkills {}

const Skills: React.FC<ISkills> = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery =
      '*[_type == "experience"] | order(_createdAt desc)';

    client.fetch(skillsQuery).then((data) => setSkills(data));
    client.fetch(experiencesQuery).then((data) => setExperiences(data));
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-1 flex-col items-center justify-center bg-white-color pt-24"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        Skills & Experiences
      </h2>
      <div className="mt-12 flex w-4/5 flex-col md:flex-row">
        <div className="mr-0 flex flex-1 flex-wrap items-center justify-center gap-1 md:mr-20 md:items-start md:justify-start md:gap-4">
          {skills.map((item: any, index: number) => (
            <SkillCard {...{ ...item }} key={index} />
          ))}
        </div>
        <div className="mt-8 flex flex-1 flex-col items-start justify-start space-y-4 md:mt-0">
          {experiences.map((item: any, index: number) => (
            <ExperienceCard {...{ ...item }} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
