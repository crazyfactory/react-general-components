import {CommonCss} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import {UploadButton} from "../buttons/UploadButton";
import {TextBox} from "./TextBox";

interface IProps {
  accept?: string;
  onChange?: (file: File) => void;
  translations: {
    chooseFile: string;
  };
}

interface IState {
  fileName: string;
}

export class FileInput extends React.PureComponent<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    accept: ".png, .jpg, .jpeg"
  };

  public state: IState = {fileName: ""};

  private fileElement: React.RefObject<HTMLInputElement> = React.createRef();

  public render(): JSX.Element {
    const {accept, translations} = this.props;
    const {fileName} = this.state;
    return (
      <div className={CommonCss.flex}>
        <TextBox containerClassName={CommonCss.grow} value={fileName}/>
        <UploadButton onClick={this.handleClick} translations={translations}/>
        <input
          className={CommonCss.hide}
          ref={this.fileElement}
          multiple={false}
          accept={accept}
          type="file"
          onChange={this.handleChange}
        />
      </div>
    );
  }

  @autobind
  private handleClick(): void {
    this.fileElement.current.click();
  }

  @autobind
  private handleChange(): void {
    const file = this.fileElement.current.files.item(0);
    this.setState({
      fileName: file.name
    });
    if (this.props.onChange) {
      this.props.onChange(file);
    }
  }
}
