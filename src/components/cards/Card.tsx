import {Color, MAX_WIDTH} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

const classNames = stylesheet({
  card: {
    backgroundColor: Color.WHITE,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.25)",
    maxWidth: MAX_WIDTH,
    padding: 15
  }
});

interface IProps {
  className?: string;
  style?: React.CSSProperties;
}

export class Card extends React.Component<IProps> {
  public render(): JSX.Element {
    const {children, className, style} = this.props;
    return (
      <div className={classes(classNames.card, className)} style={style}>
        {children}
      </div>
    );
  }
}
