import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
const ReactSwitch = require("react-switch");

interface IProps {
  checked: boolean;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  height?: number;
  onChange: (checked: boolean) => void;
  switchClassName?: string;
  switchStyle?: React.CSSProperties;
  width?: number;
}

export class Switch extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    height: 20,
    width: 48
  };

  public render(): JSX.Element {
    const {labelClassName, labelStyle, ...rest} = this.props;
    return (
      <label className={labelClassName} style={labelStyle}>
        <ReactSwitch
          onColor={Color.LIGHT_BLUE}
          onHandleColor={Color.BLUE}
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          className="react-switch"
          {...rest}
        />
      </label>
    );
  }
}
