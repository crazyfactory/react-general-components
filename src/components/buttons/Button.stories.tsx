import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {Button} from "./Button";

export default {
  component: Button,
  title: "Button"
};

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button type={"secondary"}>Secondary</Button>;
export const Disabled = () => <Button disabled={true}>Disabled</Button>;
export const StyledButton = () => {
  const style = {
    backgroundColor: Color.BLACK,
    border: 0,
    borderRadius: 5,
    color: Color.BLUE
  };
  return (
    <Button style={style}>
      Styled
    </Button>
  );
};
