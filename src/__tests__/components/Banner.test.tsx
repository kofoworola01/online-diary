/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "../../utils/test-utils";
import Banner from "components/Banner";


describe("Landing page Banner", () => {
   const p =`Each new day is a blank page in the diary of your life. The secret of success is in turning that diary into the best story you possibly can. ― Douglas Pagels.`
   
   const renderComponent = ()=>  render(<Banner />);

  it("should loads and displays banner heading and paragraph", () => {
      const { getByRole, getByText } = renderComponent()
    expect(getByRole('heading')).toHaveTextContent( "The Ultimate Online Journal")
    expect(getByText(p)).toBeInTheDocument();
  });
  
  it("should display button with Get Started", () => {
    const { getByText } = renderComponent()

    const button = getByText('Get Started Now')
    expect(button).toBeInTheDocument()
  });
});
