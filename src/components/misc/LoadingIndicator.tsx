import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {classes, keyframes, stylesheet} from "typestyle";

interface IProps {
  className?: string;
  color?: string;
  containerSide?: number;
  indicatorSide?: number;
  style?: React.CSSProperties;
}

const loadingAnimation = keyframes({
  "0%": {transform: "rotate(0deg)"},
  "100%": {transform: "rotate(360deg)"}
});

export class LoadingIndicator extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    color: Color.BLUE,
    containerSide: 60,
    indicatorSide: 50
  };

  public render(): JSX.Element {
    const {className, color, containerSide, indicatorSide, style} = this.props;
    const classNames = stylesheet({
      loading: {
        $nest: {
          "&:after": {
            animationDuration: "1.2s",
            animationIterationCount: "infinite",
            animationName: loadingAnimation,
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
            border: `3px solid ${color}`,
            borderColor: `${color} transparent ${color} transparent`,
            borderRadius: "50%",
            content: "' '",
            display: "block",
            height: indicatorSide,
            width: indicatorSide
          }
        },
        display: "inline-block",
        height: containerSide,
        width: containerSide
      }
    });

    return (
      <div className={classes(className, classNames.loading)} style={style}/>
    );
  }
}
