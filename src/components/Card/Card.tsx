import { Dispatch, SetStateAction, ChangeEvent } from "react";
import iconDollar from "../../assets/images/icon-dollar.svg";
import logo from "../../assets/images/logo.svg";

interface Props {
  bill: number;
  handleSetBill(event: ChangeEvent<HTMLInputElement>): void;
  handleReset(): void;
  handleSetTip(event: ChangeEvent<HTMLInputElement>): void;
  handleSetPeople(event: ChangeEvent<HTMLInputElement>): void;
  setTip: Dispatch<SetStateAction<number>>;
  people: number;
  tip: number;
  tipArray: number[];
  tipAmount: number;
  totalPerPerson: number;
}

const Card = ({
  bill,
  handleSetBill,
  handleReset,
  handleSetTip,
  handleSetPeople,
  people,
  setTip,
  tip,
  tipArray,
  tipAmount,
  totalPerPerson,
}: Props) => {
  return (
    <div className="container" data-testid="card-container">
      <img alt="logo" className="container__img" src={logo} />
      <div className="card">
        <div className="card__details">
          <div className="card__details-bill">
            <div className="card__details-amount">
              <span className="card__details-smalltext">Bill</span>
              <input
                aria-label="bill-input"
                className="card__details-input icon icon-1"
                onChange={handleSetBill}
                type="number"
                value={bill}
                min="1"
                step="1"
              />
            </div>
            <div className="card__details-select-tip">
              <span className="card__details-smalltext">Select Tip %</span>
              <div className="card__details-buttons">
                {tipArray.map((value) => (
                  <button
                    className={`${tip === value && "active-tip"}`}
                    key={value}
                    onClick={(e) => setTip(value)}
                  >
                    {value}%
                  </button>
                ))}
                <input
                  aria-label="tip-input"
                  onChange={handleSetTip}
                  placeholder="Custom"
                  type="number"
                  value={tip}
                  min="1"
                  step="1"
                />
              </div>
            </div>
            <span className="card__details-smalltext">Number of people</span>
            <input
              aria-label="people-input"
              className=" card__details-input icon icon-2"
              onChange={handleSetPeople}
              type="number"
              value={people}
              min="1"
              step="1"
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
                <button onClick={handleReset}>RESET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
