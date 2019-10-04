import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {Switch} from "./Switch";

export default {
  component: Switch,
  title: "Switch"
};

export const Simple = ({state, setState}) => (
  <Switch
    checked={state.checked}
    onChange={(checked) => setState({checked})}
  />
);
Simple.story = {
  decorators: [withInitialState({checked: false})]
};
