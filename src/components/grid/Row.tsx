import * as React from "react";
import {classes, stylesheet} from "typestyle";

export const classNames = stylesheet({
  row: {
    display: "flex",
    flexWrap: "wrap"
  }
});

interface IProps {
  className?: string;
  style?: React.CSSProperties;
}

export class Row extends React.Component<IProps> {
  public render(): JSX.Element {
    const {className, style, children} = this.props;
    return (
      <div className={classes(classNames.row, className)} style={style}>
        {children}
      </div>
    );
  }
}
