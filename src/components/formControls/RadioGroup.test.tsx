import {Color} from "@crazyfactory/frontend-commons";
import {shallow} from "enzyme";
import * as React from "react";
import {RadioGroup} from "./RadioGroup";

describe("<RadioGroup/>", () => {
  it("has 1rem as default elementSize prop", () => {
    expect(RadioGroup.defaultProps.elementSize).toBe("1rem");
  });

  it("can set size using elementSize prop", () => {
    const wrapper = shallow(<RadioGroup elementSize={"3rem"}/>);
    expect(wrapper).toHaveStyle("fontSize", "3rem");
  });

  it("can set style using style prop", () => {
    const wrapper = shallow(<RadioGroup style={{color: Color.BLUE}}/>);
    expect(wrapper).toHaveStyle("color", Color.BLUE);
  });

  it("overrides fontSize from elementSize prop by fontSize from style prop", () => {
    const wrapper = shallow(<RadioGroup elementSize={"3rem"} style={{fontSize: "0.5rem"}}/>);
    expect(wrapper).toHaveStyle("fontSize", "0.5rem");
  });

  it("can set className using className prop", () => {
    const wrapper = shallow(<RadioGroup className="dummyClass"/>);
    expect(wrapper).toHaveClassName("dummyClass");
  });

  it("triggers onChange when change event occurs", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<RadioGroup onChange={mockFn}/>);
    expect(mockFn).not.toHaveBeenCalled();
    wrapper.simulate("change", {target: {}});
    expect(mockFn).toHaveBeenCalled();
  });

  it("does not try to call onChange if onChange is not a function", () => {
    expect(() => {
      const wrapper = shallow(<RadioGroup/>);
      wrapper.simulate("change");
    }).not.toThrow();
  });

  it("renders children inside containing div", () => {
    const wrapper = shallow(<RadioGroup>abc</RadioGroup>);
    expect(wrapper).toHaveText("abc");
  });
});
