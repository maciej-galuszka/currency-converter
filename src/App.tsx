import { useState, useEffect } from 'react';
import { useCurrencyConverter } from './hooks/useCurrencyConverter';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Results } from './components/Results';
import { Error } from './components/Error';
import type { StylesConfig } from 'react-select';
import './assets/styles/index.css';
import './assets/styles/App.css';
import './assets/styles/queries.css';

function App() {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const { amountConverted, isLoading, error } = useCurrencyConverter(
    fromCurrency,
    toCurrency,
    Number(amount)
  );

  useEffect(() => {
    if (!amount || !amountConverted) return;

    document.title = `${amount} ${fromCurrency} → ${amountConverted} ${toCurrency}`;
    const timer = setTimeout(() => {
      document.title = 'React Currency Converter';
    }, 2000);

    return () => clearTimeout(timer);
  }, [amountConverted, amount, fromCurrency, toCurrency]);

  type CurrencyOption = {
    value: string;
    label: string;
  };

  const customStyles: StylesConfig<CurrencyOption, false> = {
    control: (base) => ({
      ...base,
      borderRadius: 8,
      fontSize: '1rem',
      fontWeight: 400,
      padding: '1.2rem',
    }),
  };

  function handleReverseCurrencies() {
    if (!fromCurrency || !toCurrency) return;
    const prevFrom = fromCurrency;
    const prevTo = toCurrency;
    setFromCurrency(prevTo);
    setToCurrency(prevFrom);
  }

  return (
    <div className="container">
      <Header />
      <Form
        value={amount}
        onSetAmount={setAmount}
        fromCurrency={fromCurrency}
        onSetFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        onSetToCurrency={setToCurrency}
        onReverseCurrencies={handleReverseCurrencies}
        customStyles={customStyles}
      />
      {error ? <Error error={error} /> : ''}
      {amount !== '' && !error && fromCurrency && toCurrency && (
        <Results
          amount={amount}
          amountConverted={amountConverted}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
