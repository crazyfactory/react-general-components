import autobind from "autobind-decorator";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

const classNames = stylesheet({
  button: {
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    margin: 0,
    outline: "none",
    padding: 0
  }
});

interface IProps {
  className?: string;
  onClick: (uniqueId: string | number) => void;
  style?: React.CSSProperties;
  uniqueId?: string | number;
}

export class TransparentButton extends React.Component<IProps> {
  public render(): JSX.Element {
    const {children, className, style} = this.props;
    return (
      <button className={classes(classNames.button, className)} style={style} onClick={this.handleClick}>
        {children}
      </button>
    );
  }

  @autobind
  private handleClick(): void {
    this.props.onClick(this.props.uniqueId);
  }
}
