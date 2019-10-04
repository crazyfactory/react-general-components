import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

export const classNames = stylesheet({
  checkbox: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: 1
  },
  checkboxIcon: {
    height: "1.5em",
    verticalAlign: "middle",
    width: "1.5em"
  },
  label: {
    cursor: "pointer",
    display: "block",
    fontSize: "1em"
  },
  square: {
    fill: "none",
    stroke: Color.BLUE,
    strokeWidth: 0.5,
    transition: `stroke 200ms ease-in`
  },
  squareChecked: {
    fill: Color.BLUE
  },
  text: {
    marginLeft: "0.4em",
    verticalAlign: "middle"
  },
  tick: {
    fill: "none",
    stroke: Color.WHITE,
    strokeDasharray: [16],
    strokeDashoffset: 16,
    strokeWidth: 2,
    transition: `stroke-dashoffset 200ms ease-in`
  },
  tickChecked: {
    strokeDashoffset: 0
  }
});

export interface IProps {
  inputClassName?: string;
  labelClassName?: string;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * A normal checkbox styled according to mockup
 */
export class Checkbox extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    const {
      checked,
      inputClassName,
      inputStyle,
      labelClassName,
      labelStyle,
      children
    } = this.props;

    return (
      <label className={classes(classNames.label, labelClassName)} style={labelStyle}>
        <input
          type="checkbox"
          className={classes(classNames.checkbox, inputClassName)}
          style={inputStyle}
          checked={checked}
          onChange={this.handleChange}
        />
        <svg className={classNames.checkboxIcon} viewBox="0 0 22 22">
          <rect
            className={classes(classNames.square, checked ? classNames.squareChecked : "")}
            x="1"
            y="1"
            rx="3"
            ry="3"
            width="20"
            height="20"
          />
          <polyline
            className={classes(classNames.tick, checked ? classNames.tickChecked : "")}
            points="6 10, 11 14, 16 8"
          />
        </svg>
        <span className={classNames.text}>{children}</span>
      </label>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e.target.checked);
  }
}
