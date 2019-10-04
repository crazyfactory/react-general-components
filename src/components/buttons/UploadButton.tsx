import {Color} from "@crazyfactory/frontend-commons";
import * as React from "react";
import {stylesheet} from "typestyle";

const classNames = stylesheet({
  button: {
    background: Color.WHITE,
    border: `1px solid ${Color.BLUE}`,
    cursor: "pointer",
    padding: "0 15px"
  }
});

interface IProps {
  onClick?: () => void;
  translations: {
    chooseFile: string;
  };
}

export class UploadButton extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const {onClick, translations} = this.props;
    return (
      <button className={classNames.button} onClick={onClick}>
        {translations.chooseFile}
      </button>
    );
  }
}
