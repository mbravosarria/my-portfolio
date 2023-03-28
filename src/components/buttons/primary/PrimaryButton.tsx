export interface IPrimaryButton {
  buttonText: string;
  onClickAction: Function;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  buttonText,
  onClickAction,
}) => {
  return (
    <button
      onClick={() => onClickAction()}
      className="cursor-pointer rounded-xl border border-secondary-color bg-secondary-color p-2 font-bold text-white-color shadow-md transition-all duration-75 hover:border-secondary-color hover:bg-primary-color hover:text-secondary-color"
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
