import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {TextBox} from "./TextBox";

export default {
  component: TextBox,
  title: "TextBox"
};

export const Simple = ({state, setState}) => (
  <TextBox value={state.value} onChange={(text) => setState({value: text})}/>
);
Simple.story = {
  decorators: [withInitialState({value: ""})]
};

export const WithError = ({state, setState}) => (
  <TextBox value={state.value} onChange={(text) => setState({value: text})} error={"Error occurred!"}/>
);
WithError.story = {
  decorators: [withInitialState({value: ""})]
};
