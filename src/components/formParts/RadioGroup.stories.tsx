import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {Radio} from "./Radio";
import {RadioGroup} from "./RadioGroup";

export default {
  component: RadioGroup,
  title: "RadioGroup"
};

export const Simple = ({state, setState}) => (
  <div>
    <RadioGroup onChange={(selected) => setState({selected})}>
      <p>
        <Radio name="gender" value="male" checked={state.selected === "male"}>Male</Radio>
      </p>
      <p>
        <Radio name="gender" value="female" checked={state.selected === "female"}>Female</Radio>
      </p>
      <p>
        <Radio name="gender" value="other" checked={state.selected === "other"}>Other</Radio>
      </p>
    </RadioGroup>
    Selected: {state.selected}
  </div>
);
Simple.story = {
  decorators: [withInitialState({selected: ""})]
};

export const LargeRadioGroupFemalePreselected = ({state, setState}) => (
  <div>
    <RadioGroup
      elementSize={"2rem"}
      onChange={(selected) => setState({selected})}
    >
      <p>
        <Radio name="gender-xlarge" value="male" checked={state.selected === "male"}>Male</Radio>
      </p>
      <p>
        <Radio name="gender-xlarge" value="female" checked={state.selected === "female"}>Female</Radio>
      </p>
      <p>
        <Radio name="gender-xlarge" value="other" checked={state.selected === "other"}>Other</Radio>
      </p>
    </RadioGroup>
    Selected: {state.selected}
  </div>
);
LargeRadioGroupFemalePreselected.story = {
  decorators: [withInitialState({selected: "female"})]
};
