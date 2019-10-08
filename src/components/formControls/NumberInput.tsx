import {CommonCss} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import {classes, stylesheet} from "typestyle";

const classNames = stylesheet({
  numberInput: {
    padding: 5
  }
});

interface IProps {
  className?: string;
  min?: number;
  max?: number;
  onChange: (value: number, uniqueId: string | number) => void;
  step?: number;
  style?: React.CSSProperties;
  uniqueId?: string | number;
  value: number;
}

export class NumberInput extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    max: 999999,
    min: 0,
    step: 1
  };

  private static isValueValid(value: number): boolean {
    return !(isNaN(value) || Math.floor(value) !== value);
  }

  public render(): JSX.Element {
    const {className, value} = this.props;
    return (
      <input
        className={classes(classNames.numberInput, CommonCss.borderGrey, className)}
        type={"text"}
        value={value === null ? "" : value}
        onChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }

  @autobind
  private handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const {onChange, max, min, uniqueId} = this.props;
    let value = e.target.value.length === 0 ? 0 : parseFloat(e.target.value);
    if (NumberInput.isValueValid(value)) {
      value = (value > max) ? max : (value < min ? min : value);
      onChange(value, uniqueId);
    }
  }

  @autobind
  private handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    const {max, min, onChange, step, uniqueId, value} = this.props;
    let newValue: number;

    switch (e.key) {
      case "ArrowUp":
        newValue = value + step;
        newValue = newValue > max ? max : newValue;
        break;
      case "ArrowDown":
        newValue = value - step;
        newValue = newValue < min ? min : newValue;
        break;
      default:
        return;
    }

    if (NumberInput.isValueValid(newValue)) {
      onChange(newValue, uniqueId);
    }
  }
}
