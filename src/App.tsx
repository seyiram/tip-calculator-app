import { FC, ChangeEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const tipArray = [5, 10, 15, 25, 50];
const App: FC = () => {
  //declare state variables
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(5);
  const [people, setPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(1);

  // Rerenders as the numbers change in the input box
  useEffect(() => {
    const tipAmt = ((tip / 100) * bill).toFixed(2);
    if (Number.isNaN(tipAmt)) return;
    setTipAmount(Number(tipAmt));
    const total = Number(tipAmt) / people;
    if (!Number.isFinite(total)) return;
    setTotalPerPerson(Number(total.toFixed(2)));
  }, [bill, people, tip]);

  //handles reset input boxes
  const handleReset = useCallback((): void => {
    setBill(0);
    setTip(5);
    setPeople(1);
    setTipAmount(0.0);
    setTotalPerPerson(0.0);
  }, []);

  const handleSetBill = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      const value = event.target.value;
      setBill(Number(value.replace(/[^\d]/, "")));
    },
    []
  );

  const handleSetTip = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      const value = event.target.value.replace(/[^\d]/, "");
      setTip(Number(value));
    },
    []
  );

  const handleSetPeople = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      const value = event.target.value.replace(/[^\d]/, "");
      setPeople(Number(value));
    },
    []
  );

  return (
    <div className="App">
      <Card
        tipArray={tipArray}
        bill={bill}
        tipAmount={tipAmount}
        people={people}
        tip={tip}
        setTip={setTip}
        handleSetBill={handleSetBill}
        handleReset={handleReset}
        handleSetTip={handleSetTip}
        handleSetPeople={handleSetPeople}
        totalPerPerson={totalPerPerson}
      />
    </div>
  );
};

export default App;
