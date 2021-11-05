/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./hello-world";

describe("<HelloWorld />", () => {
  it("renders correctly", () => {
    render(<HelloWorld favoritePerson="Me" />);

    expect(screen.getByText(/me/i)).toBeInTheDocument();
  });
});
