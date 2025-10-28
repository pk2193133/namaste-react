import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/BodyComponent";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import BodyMockData from "../utils/BodyMockData.json";
import { BrowserRouter } from "react-router-dom";
// use Testing Library async helpers instead of importing act

//for mocking fetch
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{return Promise.resolve(BodyMockData);}
    });
            
});

it("check whether body component renders or not with search button", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>
    );

    // wait for the element that appears after async work (fetch/lazy)
    const searchInput = await screen.findByTestId("search-input");
    const searchButton=screen.getByRole("button",{name:"search"});
    //expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchButton);

    const resCards = await screen.findAllByTestId("resCard");
    expect(resCards.length).toBe(1);
});