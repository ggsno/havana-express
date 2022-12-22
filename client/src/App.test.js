import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ppap", () => {
  render(<App />);
  const linkElement = screen.getByText(/ppap/i);
  expect(linkElement).toBeInTheDocument();
});
