import * as React from "react";
import { shallow } from "enzyme";
import { HelloComponent } from "./hello";
describe("HelloComponent", () => {
    it("should render correctly", () => {
        const component = shallow(<HelloComponent />);
        expect(component).toMatchSnapshot();
    });
});
