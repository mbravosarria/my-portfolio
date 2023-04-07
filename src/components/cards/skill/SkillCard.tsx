import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '../../../lib/client';

export interface ISkillCard {
  icon: any;
  name: string;
  bgColor: string;
}

const SkillCard: React.FC<ISkillCard> = ({ icon, name, bgColor }) => {
  return (
    <motion.div className="flex h-24 w-24 flex-col items-center justify-center">
      <div className={`relative h-1/2 w-1/2 rounded-full bg-[#${bgColor}]`}>
        <Image
          src={urlFor(icon).url()}
          alt={`${name} skill`}
          fill
          className="rounded-full"
        />
      </div>
      <p className="mt-2 font-medium">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
