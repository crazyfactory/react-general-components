import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

export interface IProps {
  /**
   * Color on radio selected, default is Color.BLUE
   */
  activeColor?: string;
  checked: boolean;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  name: string;
  value: string;
}

export class Radio extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    activeColor: Color.BLUE
  };

  public render(): JSX.Element {
    const {
      activeColor,
      checked,
      children,
      labelClassName,
      labelStyle,
      name,
      value
    } = this.props;

    const classNames = stylesheet({
      innerCircle: {
        backgroundColor: activeColor,
        borderRadius: "50%",
        bottom: "0.2em",
        left: "0.2em",
        position: "absolute",
        right: "0.2em",
        top: "0.2em",
        transition: `transform 400ms, opacity 400ms`
      },
      innerCircleChecked: {
        opacity: 1,
        transform: "scale(1)"
      },
      innerCircleUnchecked: {
        opacity: 0,
        transform: "scale(0)"
      },
      label: {
        cursor: "pointer",
        display: "flex",
        fontSize: "1em",
        position: "relative"
      },
      outerCircle: {
        alignSelf: "center",
        border: `1px solid ${Color.GREY}`,
        borderRadius: "50%",
        flex: "0 0 1.3em",
        height: "1.3em",
        left: 0,
        position: "relative",
        top: 0,
        width: "1.3em"
      },
      outerCircleChecked: {
        borderColor: activeColor
      },
      radio: {
        position: "absolute",
        visibility: "hidden"
      }
    });

    const innerCircleClassNames = classes(
      classNames.innerCircle, checked ? classNames.innerCircleChecked : classNames.innerCircleUnchecked
    );

    return (
      <label className={classes(classNames.label, labelClassName)} style={labelStyle}>
        <input
          type="radio"
          className={classNames.radio}
          checked={checked}
          name={name}
          value={value}
        />
        <span className={classes(classNames.outerCircle, checked ? classNames.outerCircleChecked : "")}>
          <span className={innerCircleClassNames}/>
        </span>
        {children}
      </label>
    );
  }
}
