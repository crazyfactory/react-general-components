import {Color} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import {default as ReactSelect} from "react-select";
import {Props} from "react-select/src/Select";
import {ThemeConfig} from "react-select/src/theme";

export interface IProps<T> extends Props<T> {
  translations: {
    noOptions: string;
  };
}

export class Select<T> extends React.PureComponent<IProps<T>> {
  public theme: ThemeConfig;

  constructor(props: IProps<T>) {
    super(props);
    this.theme = (theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: Color.BLUE,
        primary25: Color.LIGHT_BLUE
      }
    });
  }

  public render(): JSX.Element {
    const {noOptionsMessage, translations, ...rest} = this.props;
    return (
      <ReactSelect
        theme={this.theme}
        noOptionsMessage={this.getNoOptions}
        {...rest}
      />
    );
  }

  @autobind
  private getNoOptions(): string {
    return this.props.translations.noOptions;
  }
}
