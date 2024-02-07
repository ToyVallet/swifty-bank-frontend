import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hello from "./Hello";

it("renders a button", () => {
  render(<Hello />);
});
const element = screen.getByText("Hello");
expect(element).toBeInTheDocument();
