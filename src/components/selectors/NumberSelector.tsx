import {Color, CommonCss} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import {stylesheet} from "typestyle";
import {NumberInput} from "../formControls/NumberInput";

const classNames = stylesheet({
  button: {
    background: Color.WHITE,
    border: `1px solid ${Color.GREY}`,
    cursor: "pointer",
    height: "2em",
    width: "2em"
  },
  input: {
    borderBottom: `1px solid ${Color.GREY}`,
    borderLeft: 0,
    borderRight: 0,
    borderTop: `1px solid ${Color.GREY}`,
    height: "2em",
    textAlign: "center",
    width: "4em"
  }
});

interface IProps {
  className?: string;
  max?: number;
  min?: number;
  onChange: (value: number) => void;
  step?: number;
  style?: React.CSSProperties;
  value: number;
}

export class NumberSelector extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    max: 999999,
    min: 0,
    step: 1
  };

  public render(): JSX.Element {
    const {max, min, step, value} = this.props;
    return (
      <div className={CommonCss.inlineBlock}>
        <button
          className={classNames.button}
          onClick={this.handleNumberDecrement}
        >
          -
        </button>
        <NumberInput
          className={classNames.input}
          onChange={this.handleInputChange}
          value={value}
          max={max}
          min={min}
          step={step}
        />
        <button
          className={classNames.button}
          onClick={this.handleNumberIncrement}
        >
          +
        </button>
      </div>
    );
  }

  @autobind
  private handleNumberDecrement(): void {
    const {min, onChange, step, value} = this.props;
    let newValue = value - step;
    newValue = newValue < min ? min : newValue;
    onChange(newValue);
  }

  @autobind
  private handleNumberIncrement(): void {
    const {max, onChange, step, value} = this.props;
    let newValue = value + step;
    newValue = newValue > max ? max : newValue;
    onChange(newValue);
  }

  @autobind
  private handleInputChange(value: number): void {
    this.props.onChange(value);
  }
}
