import Image from 'next/image';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { urlFor } from '../../../lib/client';

export interface IWorkCard {
  image: any;
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
    <div className="m-4 flex w-64 cursor-pointer flex-col space-y-6 rounded-lg bg-white-color p-4 text-black-color transition-all duration-300 ease-in-out hover:shadow-xl xs:m-8 xs:w-72 2xl:w-[26rem] 2xl:rounded-xl 2xl:p-5">
      <div className="relative h-64 w-full xs:h-72 2xl:h-[26rem]">
        <Image
          src={urlFor(image).url()}
          alt="title"
          fill
          className="rounded-lg"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-4">
        <h3 className="text-center text-lg font-semibold">{title}</h3>
        <p className="text-gray-color">{description}</p>

        <div className="flex w-full flex-wrap justify-start gap-3">
          {tags.map((item, index) => (
            <p
              key={`${title}-tag-${index}`}
              className="text-sm text-brown-color 2xl:text-base"
            >
              #{item}
            </p>
          ))}
        </div>
        <div className="absolute -top-20 flex items-center justify-center gap-7 rounded-t-xl bg-white-color py-2 px-4">
          {projectLink && (
            <a
              href={projectLink}
              aria-label="Live Demo"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillEye className="text-2xl text-gray-color" />
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              aria-label="Github Repo"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-2xl text-gray-color" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
