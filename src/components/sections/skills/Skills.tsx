import ExperienceCardSkeleton from '@/components/cards/experience/ExperienceCard.skeleton';
import SkillCardSkeleton from '@/components/cards/skill/SkillCard.skeleton';
import { useEffect, useState } from 'react';
import { client } from '../../../lib/client';
import AppWrap from '../../../wrapper/AppWrap';
import MotionWrap from '../../../wrapper/MotionWrap';
import ExperienceCard from '../../cards/experience/ExperienceCard';
import SkillCard from '../../cards/skill/SkillCard';

export interface ISkills {}

const Skills: React.FC<ISkills> = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loadingSkills, setLoadingSkills] = useState(false);
  const [loadingExperiences, setLoadingExperiences] = useState(false);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery =
      '*[_type == "experience"] | order(_createdAt desc)';
    setLoadingSkills(true);
    setLoadingExperiences(true);

    client.fetch(skillsQuery).then((data) => {
      setLoadingSkills(false);
      setSkills(data);
    });
    client.fetch(experiencesQuery).then((data) => {
      setLoadingExperiences(false);
      setExperiences(data);
    });
  }, []);

  return (
    <section
      id="skills"
      className="flex min-h-screen w-full flex-1 flex-col items-center justify-center bg-white-color pt-24 pb-20 md:pb-0"
    >
      <h2 className="text-xl font-bold text-black-color sm:text-4xl md:text-5xl">
        Skills & Experiences
      </h2>
      <div className="mt-12 flex w-4/5 flex-col md:flex-row">
        <div className="mr-0 flex flex-1 flex-wrap items-center justify-center gap-1 md:mr-20 md:items-start md:justify-start md:gap-4">
          {!loadingSkills &&
            skills.map((item: any, index: number) => (
              <SkillCard {...{ ...item }} key={index} />
            ))}
          {loadingSkills &&
            [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23,
              24, 25, 26, 27, 28, 29,
            ].map((index) => (
              <SkillCardSkeleton key={`skill-card-skeleton-${index}`} />
            ))}
        </div>
        <div className="mt-8 flex flex-1 flex-col items-start justify-start space-y-4 md:mt-0">
          {!loadingExperiences &&
            experiences.map((item: any, index: number) => (
              <ExperienceCard {...{ ...item }} key={index} />
            ))}
          {loadingExperiences &&
            [1, 2, 3, 4].map((index) => (
              <ExperienceCardSkeleton
                key={`experience-card-skeleton-${index}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(Skills), 'skills');
