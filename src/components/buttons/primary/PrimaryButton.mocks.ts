import { IPrimaryButton } from './PrimaryButton';

const base: IPrimaryButton = {
  buttonText: 'Go Home',
  onClickAction: () => {
    console.log('Action submitted');
  },
};

export const mockPrimaryButtonProps = {
  base,
};
