import { render, screen } from "../testUtils/testUtils";
import { TypeWindow } from "./TypeWindow";

//An example of using react-testing-library
describe("MyComponent", async () => {
    test("Should have text Hello from My Component on it", () => {
        render(<TypeWindow />);
        const elem = screen.getByText("Hello from My Component");
        expect(elem).toBeInTheDocument();
    });
});
