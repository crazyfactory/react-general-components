import {Color} from "@crazyfactory/frontend-commons";
import {shallow} from "enzyme";
import * as React from "react";
import {Radio} from "./Radio";

describe("<Radio/>", () => {
  it("has BLUE as default activeColor prop", () => {
    expect(Radio.defaultProps.activeColor).toBe(Color.BLUE);
  });

  it("assigns name prop to radio's name", () => {
    const wrapper = shallow(<Radio name="name" value="value"/>);
    expect(wrapper.find("input")).toHaveProp("name", "name");
  });

  it("assigns value prop to radio's value", () => {
    const wrapper = shallow(<Radio name="name" value="value"/>);
    expect(wrapper.find("input")).toHaveProp("value", "value");
  });

  it("assigns labelClassName prop to label's className", () => {
    const wrapper = shallow(
      <Radio name="name" value="value" labelClassName="dummyClass"/>
    );
    expect(wrapper.find("label")).toHaveClassName("dummyClass");
  });

  it("assigns labelStyle prop to label's style", () => {
    const wrapper = shallow(
      <Radio name="name" value="value" labelStyle={{color: Color.LIGHT_BLUE}}/>
    );
    expect(wrapper.find("label")).toHaveStyle("color", Color.LIGHT_BLUE);
  });
});
