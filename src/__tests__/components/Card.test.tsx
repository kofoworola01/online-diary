/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "../../utils/test-utils";
import Card from "components/Card";

describe("Card", () => {
  const cardProp = {
    handleOpenEdit: jest.fn(),
    text: "entry 1",
    title: "my entry story",
    handleDelete: jest.fn(),
    date: "12/13/2023",
  };

  const renderComponent = () => render(<Card {...cardProp} />);

  it("should render Card", () => {
    const { getByTestId } = renderComponent();
    const Card = getByTestId('card-wrapper');
    expect(Card).toBeInTheDocument();
  });

  it("should display title and body texts", () => {
    const {getByText } = renderComponent();
    const body = getByText(cardProp.text)
    const title = getByText(cardProp.title)
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();

  });

  it("should have delete and edit buttons", () => {
    const { getAllByRole } = renderComponent();
    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(2);
  });
  it("should called handleDelete and handleOpenEdit respectively whenclicked", () => {
    const { getAllByRole } = renderComponent();
    const buttons = getAllByRole("button");

    fireEvent.click(buttons[0]);
    expect(cardProp.handleDelete).toHaveBeenCalled();
    fireEvent.click(buttons[1]);
    expect(cardProp.handleOpenEdit).toHaveBeenCalled();
  });
});
