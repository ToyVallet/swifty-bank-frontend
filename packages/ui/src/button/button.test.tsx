import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

describe("Button", () => {
  it("renders a button", () => {
    const children = "My Button";
    render(<Button variant="active">{children}</Button>);

    expect(screen.getByText("My Button")).toBeInTheDocument();
  });
});
