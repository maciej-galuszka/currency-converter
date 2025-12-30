import { ReactComponent as ReverseIcon } from '../assets/svgs/reverse.svg';

type ReverseButtonProps = {
  onReverseCurrencies: () => void;
};

export function ReverseButton({ onReverseCurrencies }: ReverseButtonProps) {
  return (
    <button
      type="button"
      className="btn__reverse"
      onClick={onReverseCurrencies}
    >
      <ReverseIcon className="h-4 w-4 rotate-90 text-greyblue-400 md:rotate-0" />
    </button>
  );
}
