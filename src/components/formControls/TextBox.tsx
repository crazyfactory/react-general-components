import {Color, CommonCss, FontSize} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

const classNames = stylesheet({
  error: {
    bottom: -20,
    color: Color.RED,
    fontSize: FontSize.SMALL,
    left: 0,
    position: "absolute"
  },
  input: {
    border: `1px solid ${Color.GREY}`,
    display: "inline-block",
    height: "100%",
    padding: 5,
    width: "100%"
  },
  inputError: {
    border: `1px solid ${Color.RED}`,
    outline: "none"
  }
});

interface IProps {
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  defaultFocus?: boolean;
  error?: string;
  errorClassName?: string;
  inputClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  inputStyle?: React.CSSProperties;
  onBlur?: () => void;
  onChange?: (value: string, uniqueId: string | number) => void;
  placeholder?: string;
  type?: string;
  uniqueId?: string | number;
  value: string;
}

export class TextBox extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    error: "",
    type: "text"
  };

  private input: React.RefObject<HTMLInputElement> = React.createRef();

  public componentDidMount(): void {
    const {defaultFocus} = this.props;
    if (defaultFocus) {
      this.input.current.focus();
    }
  }

  public render(): JSX.Element {
    const {
      error,
      containerClassName,
      containerStyle,
      inputClassName,
      inputRef,
      inputStyle,
      onBlur,
      placeholder,
      type,
      value
    } = this.props;
    return (
      <div
        className={classes(containerClassName, CommonCss.inlineBlock, CommonCss.positionRelative)}
        style={containerStyle}
      >
        <input
          className={classes(classNames.input, error.length ? classNames.inputError : "", inputClassName)}
          style={inputStyle}
          onBlur={onBlur}
          onChange={this.handleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          ref={inputRef || this.input}
        />
        {this.renderError()}
      </div>
    );
  }

  @autobind
  private renderError(): JSX.Element {
    const {error, errorClassName} = this.props;
    if (error.length) {
      return <span className={classes(classNames.error, errorClassName)}>{error}</span>;
    }
    return null;
  }

  @autobind
  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(e.target.value, this.props.uniqueId);
  }
}
