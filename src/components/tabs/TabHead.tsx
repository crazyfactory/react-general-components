import autobind from "autobind-decorator";
import * as React from "react";

interface IProps {
  className?: string;
  customOnClick?: () => void;
  index: number;
  onClick?: (index: number) => void;
  style?: React.CSSProperties;
}

export class TabHead extends React.Component<IProps> {
  public render(): JSX.Element {
    const {className, style} = this.props;
    return (
      <div className={className} style={style} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }

  @autobind
  private handleClick(): void {
    if (this.props.onClick) {
      this.props.onClick(this.props.index);
    }
    if (this.props.customOnClick) {
      this.props.customOnClick();
    }
  }
}
