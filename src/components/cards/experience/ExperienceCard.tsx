export interface IExperienceCard {
  date: string;
  role: string;
  company: string;
  tags: Array<string>;
}

const ExperienceCard: React.FC<IExperienceCard> = ({
  date,
  role,
  company,
  tags,
}) => {
  return (
    <div className="flex items-start justify-start space-x-8">
      <h4 className="font-semibold text-secondary-color">{date}</h4>
      <div className="cursor-pointer">
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
    </div>
  );
};

export default ExperienceCard;
