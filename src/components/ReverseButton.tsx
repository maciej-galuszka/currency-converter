import reverseIcon from '../assets/svgs/reverse.svg';

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
      <img src={reverseIcon} alt="Reverse button" className="" />
    </button>
  );
}
