import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {Checkbox} from "./Checkbox";

export default {
  component: Checkbox,
  title: "Checkbox"
};

export const Simple = ({state, setState}) => (
  <Checkbox
    checked={state.checked}
    onChange={(checked) => setState({checked})}
  >
    Check me!
  </Checkbox>
);

Simple.story = {
  decorators: [withInitialState({checked: false})]
};
