import { useEffect, useState } from 'react';

export function useCurrencyConverter(
  fromCurrency: string,
  toCurrency: string,
  amount: number
): { amountConverted: number; error: string; isLoading: boolean } {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [amountConverted, setAmountConverted] = useState<number>(0);

  useEffect(
    function () {
      const controller = new AbortController();
      let isMounted = true;

      setError('');

      // Data validation
      if (!fromCurrency || !toCurrency || !amount) return;

      // If convertion currencies are the same return amount
      if (fromCurrency === toCurrency) return setAmountConverted(amount);

      setIsLoading(true);

      async function fetchCurrencyData() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=1&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error('Something went wrong... Please try again!');

          const data = await res.json();

          // Updating state only if the component is mounted
          if (isMounted) {
            setAmountConverted(amount * data.rates[toCurrency]);
            setError('');
            setIsLoading(false);
          }
        } catch (err) {
          // Ignoring error if the request is cancelled
          if (err instanceof Error && err.name === 'AbortError') {
            return;
          }

          if (isMounted) {
            setIsLoading(false);
            if (err instanceof TypeError) {
              return setError(
                'Failed to fetch data. Make sure you have an internet connection and refresh the page.'
              );
            } else if (err instanceof Error) {
              return setError(err.message);
            } else {
              return setError('Failed to fetch');
            }
          }
        }
      }

      fetchCurrencyData();

      return () => {
        isMounted = false;
        controller.abort();
      };
    },
    [amount, fromCurrency, toCurrency]
  );

  return { amountConverted, error, isLoading };
}
