import { shallow } from "enzyme";

import React from "react";
import HomePage from "./homepage.component";

it('should render HomePage component', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
});