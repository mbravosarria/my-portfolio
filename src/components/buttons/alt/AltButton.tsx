export interface IAltButton {
  buttonText: string;
  onClickAction: Function;
}

const AltButton: React.FC<IAltButton> = ({ buttonText, onClickAction }) => {
  return (
    <button
      onClick={() => onClickAction()}
      className="cursor-pointer rounded-xl border border-gold-color bg-gold-color p-2 font-bold text-white-color shadow-md transition-all duration-75 hover:border-gold-color hover:bg-primary-color hover:text-gold-color"
    >
      {buttonText}
    </button>
  );
};

export default AltButton;
