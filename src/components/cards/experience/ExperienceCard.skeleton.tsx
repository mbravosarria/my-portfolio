import Skeleton from 'react-loading-skeleton';

export interface IExperienceCardSkeleton {}

const ExperienceCardSkeleton: React.FC<IExperienceCardSkeleton> = () => {
  return (
    <div className="flex w-full items-start justify-between space-x-8">
      <div className="w-1/3">
        <Skeleton width={'100%'} height={20} />
      </div>
      <div className="flex w-2/3 cursor-pointer flex-col space-y-1">
        <Skeleton width={'100%'} height={20} />
        <Skeleton width={'100%'} height={20} />
        <Skeleton width={'30%'} height={20} />
      </div>
    </div>
  );
};

export default ExperienceCardSkeleton;
