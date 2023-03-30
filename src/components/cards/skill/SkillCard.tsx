import { motion } from 'framer-motion';
import Image from 'next/image';

export interface ISkillCard {
  icon: string;
  name: string;
}

const SkillCard: React.FC<ISkillCard> = ({ icon, name }) => {
  return (
    <motion.div className="flex h-24 w-24 flex-col items-center justify-center">
      <div className="relative h-1/2 w-1/2 rounded-full bg-[#fef4f5]">
        <Image src={icon} alt={`${name} skill`} fill />
      </div>
      <p className="mt-2 font-medium">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
