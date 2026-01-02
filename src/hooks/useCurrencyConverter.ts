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
      if (!fromCurrency || !toCurrency || !amount) return;
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
          if (isMounted) {
            // Updating state only if the component is mounted
            setAmountConverted(amount * data.rates[toCurrency]);
          }
        } catch (err) {
          if (err instanceof TypeError) {
            return setError(
              'Failed to fetch data. Make sure you have an internet connection and refresh the page.'
            );
          } else if (err instanceof Error) {
            return setError(err.message);
          } else {
            return setError('Failed to fetch');
          }
        } finally {
          setIsLoading(false);
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
