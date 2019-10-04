import * as React from "react";
import {Select} from "./Select";

export default {
  component: Select,
  title: "Select"
}

export const Simple = () => (
  <Select
    defaultValue={{label: "Chocolate", value: 1}}
    options={[
      {label: "Chocolate", value: 1},
      {label: "Strawberry", value: 2},
      {label: "Vanilla", value: 3}
    ]}
    translations={{noOptions: "No Options"}}
  />
);

export const WithCustomLabelAndValue = () => (
  <Select
    defaultValue={{dessertName: "Chocolate", dessertId: 1}}
    options={[
      {dessertName: "Chocolate", dessertId: 1},
      {dessertName: "Strawberry", dessertId: 2},
      {dessertName: "Vanilla", dessertId: 3}
    ]}
    translations={{noOptions: "No Options"}}
    getOptionLabel={(option) => option.dessertName}
    getOptionValue={(option) => option.dessertId.toString()}
  />
);

export const WithPlaceholderButNoOptions = () => (
  <Select
    defaultValue={null}
    options={[]}
    placeholder="Choose dessert"
    translations={{noOptions: "No Options"}}
  />
);
