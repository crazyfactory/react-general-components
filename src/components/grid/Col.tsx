import {Breakpoints, buildBreakpoints} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

interface IProps {
  className?: string;
  lg?: 1|2|3|4|5|6|7|8|9|10|11|12;
  /**
   * priority over lgGrow
   */
  lgFixedWidth?: number;
  /**
   * priority over lg
   */
  lgGrow?: boolean;
  md?: 1|2|3|4|5|6|7|8|9|10|11|12;
  /**
   * priority over mdGrow
   */
  mdFixedWidth?: number;
  /**
   * priority over md
   */
  mdGrow?: boolean;
  sm?: 1|2|3|4|5|6|7|8|9|10|11|12;
  /**
   * priority over smGrow
   */
  smFixedWidth?: number;
  /**
   * priority over sm
   */
  smGrow?: boolean;
  style?: React.CSSProperties;
}

export class Col extends React.Component<IProps> {
  public render(): JSX.Element {
    const {
      children,
      className,
      lg,
      lgFixedWidth,
      lgGrow,
      md,
      mdFixedWidth,
      mdGrow,
      sm,
      smFixedWidth,
      smGrow,
      style
    } = this.props;
    const classNames = stylesheet({
      grid: {
        flexGrow: smGrow ? 1 : 0,
        width: smFixedWidth || (smGrow ? "auto" : (sm || 12) / 12 * 100 + "%"),
        ...(smFixedWidth != null ? {flexBasis: smFixedWidth, minWidth: smFixedWidth} : {}),
        ...buildBreakpoints(
          [
            {
              flexGrow: mdGrow ? 1 : 0,
              minScreenWidth: Breakpoints.MD,
              width: mdFixedWidth || (mdGrow ? "auto" : (md || sm || 12) / 12 * 100 + "%"),
              ...(mdFixedWidth != null ? {flexBasis: mdFixedWidth, minWidth: mdFixedWidth} : {})
            },
            {
              flexGrow: lgGrow ? 1 : 0,
              minScreenWidth: Breakpoints.LG,
              width: lgFixedWidth || (lgGrow ? "auto" : (lg || md || sm || 12) / 12 * 100 + "%"),
              ...(lgFixedWidth != null ? {flexBasis: lgFixedWidth, minWidth: lgFixedWidth} : {})
            }
          ]
        )
      }
    });
    return (
      <div className={classes(classNames.grid, className)} style={style}>
        {children}
      </div>
    );
  }
}
