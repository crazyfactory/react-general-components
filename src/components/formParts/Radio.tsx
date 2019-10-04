import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {stylesheet} from "typestyle";

export interface IProps {
  /**
   * Color on radio selected, default is Color.JADE
   */
  activeColor?: string;
  defaultChecked?: boolean;
  /**
   * id of radio, necessary for label's `htmlFor`
   */
  id: string;
  label: string | JSX.Element;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  name: string;
  value: string;
}

// todo: remove need for id prop by moving input inside label
export class Radio extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    activeColor: Color.BLUE
  };

  public render(): JSX.Element {
    const {
      activeColor,
      id,
      label,
      labelClassName,
      labelStyle,
      ...rest
    } = this.props;

    const classNames = stylesheet({
      radio: {
        $nest: {
          "& + label": {
            cursor: "pointer",
            display: "flex",
            fontSize: "1em",
            position: "relative"
          },
          "& + label .inner-circle": {
            backgroundColor: activeColor,
            borderRadius: "50%",
            bottom: "0.2em",
            left: "0.2em",
            position: "absolute",
            right: "0.2em",
            top: "0.2em",
            transition: `transform 400ms, opacity 400ms`
          },
          "& + label .outer-circle": {
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
          "&:checked + label .inner-circle": {
            opacity: 1,
            transform: "scale(1)"
          },
          "&:checked + label .outer-circle": {
            borderColor: activeColor
          },
          "&:not(:checked) + label .inner-circle": {
            opacity: 0,
            transform: "scale(0)"
          }
        },
        position: "absolute",
        visibility: "hidden"
      }
    });

    return (
      <>
        <input
          type="radio"
          id={id}
          className={classNames.radio}
          {...rest}
        />
        <label htmlFor={id} className={labelClassName} style={labelStyle}>
          <span className="outer-circle">
            <span className="inner-circle"/>
          </span>
          {label}
        </label>
      </>
    );
  }
}
