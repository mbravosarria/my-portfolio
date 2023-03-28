import { IAltButton } from './AltButton';

const base: IAltButton = {
  buttonText: 'Go Home',
  onClickAction: () => {
    console.log('Action submitted');
  },
};

export const mockAltButtonProps = {
  base,
};
