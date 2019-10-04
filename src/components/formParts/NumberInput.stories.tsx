import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {NumberInput} from "./NumberInput";

export default {
  component: NumberInput,
  title: "NumberInput"
};

export const Normal = ({state, setState}) => (
  <NumberInput value={state.value} onChange={(value) => setState({value})}/>
);
Normal.story = {
  decorators: [withInitialState({value: 0})]
};
