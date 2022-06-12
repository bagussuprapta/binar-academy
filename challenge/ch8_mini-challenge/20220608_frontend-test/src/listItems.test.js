import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ListItems from "./listItems";

const input = "safira";
const { getByTestId } = render(<ListItems />);
afterEach(cleanup);

it("test handleAddItem", async () => {
  fireEvent.change(getByTestId("newItem"), { target: { value: input } });
  fireEvent.click(getByTestId("add-item"));
  expect(getByTestId("item" + input.length).textContent).toBe(input);
  fireEvent.click(getByTestId("remove-item" + input.length));
  expect(getByTestId("ui-item").textContent).toBe("");
});