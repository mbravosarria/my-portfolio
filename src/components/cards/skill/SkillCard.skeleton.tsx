import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';

export interface ISkillCardSkeleton {}

const SkillCardSkeleton: React.FC<ISkillCardSkeleton> = () => {
  return (
    <motion.div className="flex h-24 w-24 flex-col items-center justify-center">
      <div className="h-1/2 w-1/2 rounded-full">
        <Skeleton width={'100%'} height={'100%'} circle={true} />
      </div>
      <div className="mt-2 w-1/2">
        <Skeleton width={'100%'} height={20} />
      </div>
    </motion.div>
  );
};

export default SkillCardSkeleton;
