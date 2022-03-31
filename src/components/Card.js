import { useCallback, useEffect, useState } from 'react';
import iconDollar from '../assets/images/icon-dollar.svg';
import logo from '../assets/images/logo.svg';

// General:
// You should be able to handle passing negative numbers to the custom tip
// Same for number of people and tips. With people if you have 0 you'll have Infinity
// Handle decimals better: for input 76 for 5% you'll get $3.8000000000000003, you can use toFixed(2) for that

const Card = () => {
  // Declare the tipArray outside the component, otherwise every time the component re-renders it'll also recreate the array, which is unnecessary.
  const tipArray = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(5);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(1);

  // That is a very good use of useEffect
  useEffect(() => {
    // You can just have the 4 lines of logic inside this useEffect without needing to declare and call the function
    const handleTipCalculation = () => {
      const tipAmt = (tip / 100) * bill;
      setTipAmount(tipAmt);
      const total = tipAmt / people;
      setTotalPerPerson(Math.round(total));
    };
    handleTipCalculation();
  }, [bill, people, tip]);

  // wrap this into a usecallback
  // usecallback will make this function not to be declared every time the component re-renders and that saves memory
  // https://reactjs.org/docs/hooks-reference.html#usecallback
  // also handleReset would be a better name
  const reset = () => {
    setBill(0);
    setTip(5);
    setPeople(1);
    setTipAmount(0);
    setTotalPerPerson(1);
  };

  const handleSetBill = useCallback((event) => {
    setBill(event.target.value);
  }, []);

  return (
    <div className="container">
      <img alt="logo" className="container__img" src={logo} />
      <div className="card">
        <div className="card__details">
          <div className="card__details-bill">
            <div className="card__details-amount">
              <span className="card__details-smalltext">Bill</span>
              <input
                className="card__details-input icon icon-1"
                id=""
                // Every time you have a onChange function you can use the usecallback, otherwise every time the component re-renders it'll cause the function to be reassigned/redeclared
                // So you'd have a handleSetBill (I'll make an example above)
                onChange={handleSetBill}
                type="number"
                value={bill}
              />
            </div>
            <div className="card__details-select-tip">
              <span className="card__details-smalltext">
                Select Tip %
              </span>
              <div className="card__details-buttons">
                {tipArray.map((value) => (
                  <button
                    className={`${tip === value && 'active-tip'}`}
                    key={value}
                    onClick={(e) => setTip(value)}
                  >
                    {value}%
                  </button>
                ))}
                <input
                  onChange={(e) => setTip(e.target.value)}
                  placeholder="0.00"
                  type="number"
                  value={tip}
                />
              </div>
            </div>
            <span className="card__details-smalltext">
              Number of people
            </span>
            <input
              className=" card__details-input icon icon-2"
              onChange={(e) => setPeople(e.target.value)}
              type="number"
              value={people}
            />
          </div>
          <div className="card__details-calculate-tip">
            <div className="card_details-calculate-tip-card">
              <div className="card__details-calculate-tip-content">
                <div className="card_details-calculate-tip-content-row-1">
                  <div className="card__details-calculate-tip-content-title">
                    <h4>Tip Amount</h4>
                    <span>/ person</span>
                  </div>
                  <div className="card__details-calculate-tip-content-amount">
                    <h1>
                      <span>
                        <img alt="" src={iconDollar} />
                      </span>
                      {tipAmount}
                    </h1>
                  </div>
                </div>
                <div className="card_details-calculate-tip-content-row-2">
                  <div className="card__details-calculate-tip-content-title">
                    <h4>Total</h4>
                    <span>/ person</span>
                  </div>
                  <div className="card__details-calculate-tip-content-amount">
                    <h1>
                      <span>
                        <img alt="" src={iconDollar} />
                      </span>
                      {totalPerPerson}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="card__details-calculate-tip-button">
                <button onClick={(e) => reset()}>RESET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
