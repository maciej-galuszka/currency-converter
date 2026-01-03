type ResultsProps = {
  amount: string;
  amountConverted: number;
  fromCurrency: string;
  toCurrency: string;
  isLoading: boolean;
};

export function Results({
  amount,
  amountConverted,
  fromCurrency,
  toCurrency,
  isLoading,
}: ResultsProps) {
  return (
    <div className="results">
      {isLoading ? (
        <p>
          Loading...<span className="loader"></span>
        </p>
      ) : (
        <p>{`${amount} ${fromCurrency} = ${amountConverted.toFixed(
          2
        )} ${toCurrency}`}</p>
      )}
    </div>
  );
}
