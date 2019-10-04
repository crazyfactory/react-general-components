import * as React from "react";
import {classes, stylesheet} from "typestyle";

const classNames = stylesheet({
  icon: {
    height: 24
  }
});

// tslint:disable:max-line-length no-http-string
export class CloseIcon extends React.PureComponent<React.SVGProps<SVGSVGElement>> {
  public static defaultProps: Partial<React.SVGProps<SVGSVGElement>> = {
    fill: "currentColor",
    height: 24,
    width: 24
  };

  public render(): JSX.Element {
    const {className, ...rest} = this.props;
    return (
      <svg className={classes(classNames.icon, className)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path d="M16.599,14.478 C17.185,15.064 17.185,16.013 16.599,16.599 C16.013,17.185 15.064,17.185 14.478,16.599 L12.002,14.124 L9.528,16.599 C8.942,17.185 7.993,17.185 7.407,16.599 C6.821,16.013 6.821,15.064 7.407,14.478 L9.881,12.003 L7.407,9.528 C6.821,8.942 6.821,7.993 7.407,7.407 C7.993,6.821 8.942,6.821 9.528,7.407 L12.002,9.881 L14.478,7.407 C14.771,7.114 15.155,6.967 15.538,6.967 C15.73,6.967 15.922,7.004 16.103,7.077 C16.284,7.15 16.453,7.26 16.599,7.407 C17.185,7.993 17.185,8.942 16.599,9.528 L14.124,12.003 L16.599,14.478 Z M12,0 C5.373,0 0,5.373 0,12 C0,18.627 5.373,24 12,24 C18.627,24 24,18.627 24,12 C24,5.373 18.627,0 12,0 Z"/>
      </svg>
    );
  }
}
