import * as React from "react";

export interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLDivElement & HTMLInputElement>) => void;
  className?: string;
  elementSize?: string | number;
  style?: React.CSSProperties;
}

// todo: this component is still considered uncontrolled. (lack of selectedValue prop)
/**
 * Radios Container
 */
export class RadioGroup extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    elementSize: "1rem"
  };

  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    const {children, className, elementSize, style} = this.props;
    const radioGroupStyle = {
      fontSize: elementSize,
      ...style
    };
    return (
      <div onChange={this.handleChange} style={radioGroupStyle} className={className}>
        {children}
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLDivElement & HTMLInputElement>): void {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
}
