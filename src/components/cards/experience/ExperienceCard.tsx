import { Tooltip } from 'react-tooltip';

export interface IExperienceCard {
  date: string;
  role: string;
  company: string;
  description: string;
  tags: Array<string>;
}

const ExperienceCard: React.FC<IExperienceCard> = ({
  date,
  role,
  company,
  description,
  tags,
}) => {
  return (
    <div className="flex items-start justify-start space-x-8">
      <h4 className="font-semibold text-secondary-color">{date}</h4>
      <div className="experience-info cursor-pointer">
        <h5 className="font-semibold text-black-color">{role}</h5>
        <p className="text-gray-color">{company}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((item, index) => (
            <p key={index} className="text-brown-color">
              #{item}
            </p>
          ))}
        </div>
      </div>
      <Tooltip
        anchorSelect=".experience-info"
        place="top"
        style={{
          backgroundColor: '#fff',
          boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.3)',
          width: 300,
        }}
      >
        <p className="mb-2 text-black-color">{description}</p>
      </Tooltip>
    </div>
  );
};

export default ExperienceCard;
