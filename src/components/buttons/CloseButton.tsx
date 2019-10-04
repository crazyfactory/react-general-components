import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {classes, stylesheet} from "typestyle";
import {CloseIcon} from "../..";

const classNames = stylesheet({
  button: {
    backgroundColor: "unset",
    border: 0,
    cursor: "pointer",
    outline: "none",
    padding: 0
  }
});

interface IProps {
  className?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

export class CloseButton extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const {className, onClick, style} = this.props;
    return (
      <button className={classes(classNames.button, className)} style={style} onClick={onClick}>
        <CloseIcon fill={Color.GREY}/>
      </button>
    );
  }
}
