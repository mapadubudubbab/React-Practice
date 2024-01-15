import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cash, setCash] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [numberOfCoins, setNumberOfCoins] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeCash = (event) => {
    setCash(event.target.value);
  }

  const onChangeCoin = (event) => {
    setSelectedCoin(event.target.value);
  }

  useEffect(() => {
    if (selectedCoin && coins.length > 0) {
      const selectedCoinData = coins.find((coin) => coin.id === selectedCoin);
      setNumberOfCoins(cash / selectedCoinData.quotes.USD.price);
    }
  }, [cash, selectedCoin, coins]);

  return (
    <div>
      <h1>Hi Bit {loading ? "" : `(${coins.length})`}</h1>
      <form>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <div>
            <input type="number" onChange={onChangeCash} value={cash} placeholder='Your Cash' /> USD
            <br />
            <select onChange={onChangeCoin} value={selectedCoin}>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
        )}
        <p>{numberOfCoins.toFixed(2)}!!!</p>
      </form>
    </div>
  );
}

export default App;
