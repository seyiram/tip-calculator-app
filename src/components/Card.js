import logo from "../assets/images/logo.svg";
import iconDollar from "../assets/images/icon-dollar.svg";
import { useEffect, useState } from "react";

const Card = () => {
  const tipArray = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(5);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(1);

  useEffect(() => {
    const handleTipCalculation = () => {
      
        const tipAmt = (tip / 100) * bill;
        setTipAmount(tipAmt);
        const total = tipAmt / people;
        setTotalPerPerson(Math.round(total) || 0);
      
    };
    handleTipCalculation();
  }, [bill, people, tip]);

  const reset = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setTipAmount(0)
    setTotalPerPerson(0)
  };

  console.log("bill here", bill);
  console.log("tip here", tip);
  console.log("people here", people);
  return (
    <div className="container">
      <img src={logo} alt="logo" className="container__img" />
      <div className="card">
        <div className="card__details">
          <div className="card__details-bill">
            <div className="card__details-amount">
              <span className="card__details-smalltext">Bill</span>
              <input
                type="number"
                id=""
                className="card__details-input icon icon-1"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
            <div className="card__details-select-tip">
              <span className="card__details-smalltext">Select Tip %</span>
              <div className="card__details-buttons">
                {tipArray.map((value) => (
                  <button key={value} onClick={(e) => setTip(value)} className={`${tip === value && 'active-tip'}`}>
                    {value}%
                  </button>
                ))}
                <input
                  type="number"
                  placeholder="0.00"
                  value={tip}
                  onChange={(e) => setTip(e.target.value)}
                />
              </div>
            </div>
            <span className="card__details-smalltext">Number of people</span>
            <input
              type="number"
              className=" card__details-input icon icon-2"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
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
                        <img src={iconDollar} alt="" />
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
                        <img src={iconDollar} alt="" />
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
