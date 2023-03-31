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
      <div>
        <h5 className="font-semibold text-black-color">{role}</h5>
        <p className="text-gray-color">{company}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
