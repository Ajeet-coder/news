import { render, screen } from "@testing-library/react"
import LoadingScreen from "./LoadingScreen"


describe("Loading Screen",()=>{
    test("Check Loading ",()=>{
        render(
            <LoadingScreen/>
        )

        const loading=screen.getByRole("heading",{
            level: 3
        })

        expect(loading).toBeInTheDocument()
    })
})