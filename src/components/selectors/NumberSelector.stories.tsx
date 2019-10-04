import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {NumberSelector} from "./NumberSelector";

export default {
  component: NumberSelector,
  title: "NumberSelector"
};

export const Simple = ({state, setState}) => (
  <NumberSelector value={state.value} onChange={(value) => setState({value})}/>
);
Simple.story = {
  decorators: [withInitialState({value: 1})]
};

export const WithSomeProps = ({state, setState}) => (
  <NumberSelector max={1000} min={100} value={state.value} onChange={(value) => setState({value})} step={10}/>
);
WithSomeProps.story = {
  decorators: [withInitialState({value: 100})]
};
