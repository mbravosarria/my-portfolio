export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="underline">{sampleTextProp}</div>;
};

export default BaseTemplate;
