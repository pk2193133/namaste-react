import { render,screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import HeaderComponent from "../components/HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

test("check whether component renders or not",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    );
    const text=screen.getByText("home");
    expect(text).toBeInTheDocument();
});
