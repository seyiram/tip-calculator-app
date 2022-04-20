import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../Card";

function handleSetBill(event) {
  return;
}
function handleSetPeople(event) {
  return;
}
function handleSetTip(event) {
  return;
}

test("on intial render, it renders card", () => {
  render(
    <Card
      bill={5}
      people={2}
      handleSetBill={(e) => handleSetBill(e.target.value)}
      handleSetPeople={(e) => handleSetPeople(e.target.value)}
      handleSetTip={(e) => handleSetTip(e.target.value)}
      setTip={5}
      tipAmount={5}
      tipArray={[1, 2]}
      tip={5}
    />
  );
});

test("bill input should only accept positive integers", () => {
  render(
    <Card
      bill={5}
      people={2}
      handleSetBill={(e) => handleSetBill(e.target.value)}
      handleSetPeople={(e) => handleSetPeople(e.target.value)}
      handleSetTip={(e) => handleSetTip(e.target.value)}
      setTip={5}
      tipAmount={5}
      tipArray={[1, 2]}
      tip={5}
    />
  );
  const input = screen.getByLabelText("bill-input");
  fireEvent.change(input, { target: { value: "5" } });
  expect(input.value).toBe("5");
});

test("tip input should only accept positive integers", () => {
  render(
    <Card
      bill={5}
      people={2}
      handleSetBill={(e) => handleSetBill(e.target.value)}
      handleSetPeople={(e) => handleSetPeople(e.target.value)}
      handleSetTip={(e) => handleSetTip(e.target.value)}
      setTip={5}
      tipAmount={5}
      tipArray={[1, 2]}
      tip={-1}
    />
  );
  const input = screen.getByLabelText("tip-input");
  fireEvent.change(input, { target: { value: "5" } });
  expect(input.value).toBe("-1");
});

test("people input should only accept positive integers", () => {
  render(
    <Card
      bill={5}
      people={2}
      handleSetBill={(e) => handleSetBill(e.target.value)}
      handleSetPeople={(e) => handleSetPeople(e.target.value)}
      handleSetTip={(e) => handleSetTip(e.target.value)}
      setTip={5}
      tipAmount={5}
      tipArray={[1, 2]}
      tip={5}
    />
  );
  const input = screen.getByLabelText("people-input");
  fireEvent.change(input, { target: { value: "2" } });
  expect(input.value).toBe("2");
});
