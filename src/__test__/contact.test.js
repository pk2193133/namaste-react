import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"

test("check whether component renders or not",()=>{
	render(<Contact/>);

	const heading=screen.getByRole("heading");
	expect(heading).toBeInTheDocument();

})