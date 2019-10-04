import {shallow} from "enzyme";
import * as React from "react";
import {Button} from "./Button";

describe("<Button/>", () => {
  it("can be clicked", () => {
    const spied = jest.fn();
    const wrapper = shallow(<Button onClick={spied}>button</Button>);
    wrapper.find("button").simulate("click");
    expect(spied).toHaveBeenCalled();
  });
});
