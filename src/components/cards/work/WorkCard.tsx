import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

export interface IWorkCard {
  image: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  tags: Array<string>;
}

const WorkCard: React.FC<IWorkCard> = ({
  image,
  title,
  description,
  projectLink,
  codeLink,
  tags,
}) => {
  return (
    <div className="m-4 flex w-full cursor-pointer flex-col space-y-6 rounded-lg bg-white-color p-4 text-black-color transition-all duration-300 ease-in-out hover:shadow-xl xs:m-8 xs:w-72 2xl:w-[26rem] 2xl:rounded-xl 2xl:p-5">
      <div className="relative h-full w-full xs:h-72 2xl:h-[26rem]">
        <Image src={image} alt="title" fill className="rounded-lg" />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
            staggerChildren: 0.5,
          }}
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full rounded-lg bg-black-color/50 opacity-0 transition-all duration-300 ease-in-out"
        >
          <a href={codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="m-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black-color/50 font-extrabold text-white-color transition-all duration-300 ease-in-out"
            >
              <AiFillGithub className="h-1/2 w-1/2 text-white-color" />
            </motion.div>
          </a>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="m-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black-color/50 font-extrabold text-white-color transition-all duration-300 ease-in-out"
            >
              <AiFillEye className="h-1/2 w-1/2 text-white-color" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="flex flex-col space-y-4">
        <h4 className="text-center text-lg font-semibold">{title}</h4>
        <p className="text-gray-color">{description}</p>

        <div className="flex flex-wrap justify-start gap-3">
          {tags.map((item, index) => (
            <p
              key={`${title}-tag-${index}`}
              className="text-sm text-brown-color 2xl:text-base"
            >
              #{item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
