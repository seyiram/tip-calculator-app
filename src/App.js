import "./App.css";
import logo from "./assets/images/logo.svg";
import iconDollar from "./assets/images/icon-dollar.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="logo" className="container__img" />
        <div className="card">
          <div className="card__details">
            <div className="card__details-bill">
              <div className="card__details-amount">
                <span className="card__details-smalltext">Bill</span>
                <input
                  type="text"
                  id=""
                  className="card__details-input icon icon-1"
                />
              </div>
              <div className="card__details-select-tip">
                <span className="card__details-smalltext">Select Tip %</span>
                <div className="card__details-buttons">
                  <button>5%</button>
                  <button>10%</button>
                  <button>15%</button>
                  <button>25%</button>
                  <button>50%</button>
                  <input type="text" placeholder="0.00" />
                </div>
              </div>
              <span className="card__details-smalltext">Number of people</span>
              <input type="text" className=" card__details-input icon icon-2" />
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
                        0.00
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
                        0.00
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="card__details-calculate-tip-button">
                  <button className="">RESET</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
