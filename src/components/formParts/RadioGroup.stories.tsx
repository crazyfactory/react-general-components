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
    <RadioGroup onChange={(e) => setState({selected: e.target.value})}>
      <p>
        <Radio name="gender" value="male" label="male" id="radio-gender-male"/>
      </p>
      <p>
        <Radio name="gender" value="female" label="female" id="radio-gender-female"/>
      </p>
      <p>
        <Radio name="gender" value="other" label="other" id="radio-gender-other"/>
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
      onChange={(e) => { setState({selected: e.target.value}); }}
    >
      <p>
        <Radio
          name="gender-xlarge"
          value="male"
          label="male"
          id="radio-gender-male-xlarge"
          defaultChecked={state.selected === "male"}
        />
      </p>
      <p>
        <Radio
          name="gender-xlarge"
          value="female"
          label="female"
          id="radio-gender-female-xlarge"
          defaultChecked={state.selected === "female"}
        />
      </p>
      <p>
        <Radio
          name="gender-xlarge"
          value="other"
          label="other"
          id="radio-gender-other-xlarge"
          defaultChecked={state.selected === "other"}
        />
      </p>
    </RadioGroup>
    Selected: {state.selected}
  </div>
);
LargeRadioGroupFemalePreselected.story = {
  decorators: [withInitialState({selected: "female"})]
};
