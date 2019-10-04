import {Color, CommonCss} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import ReactModal = require("react-modal");
import {classes, cssRaw, stylesheet} from "typestyle";
import {CloseButton} from "../buttons/CloseButton";

const classNames = stylesheet({
  closeButton: {
    position: "absolute",
    right: "1em",
    top: "1em"
  },
  content: {
    background: Color.WHITE,
    margin: "2rem auto",
    padding: "2em",
    position: "relative"
  },
  overlay: {
    backgroundColor: "rgba(54, 54, 54, 0.9)",
    bottom: 0,
    left: 0,
    overflowX: "hidden",
    overflowY: "auto",
    position: "fixed",
    right: 0,
    top: 0
  }
});

cssRaw(`
  .modal-open {
    overflow: hidden;
  }
`);

interface IProps extends ReactModal.Props {
  onClose: () => void;
  centralize?: boolean;
  contentClassName?: string;
  overlayClassName?: string;
}

export class Modal extends React.Component<IProps> {

  public render(): JSX.Element {
    const {centralize, children, contentClassName, onClose, overlayClassName, ...rest} = this.props;

    return (
      <ReactModal
        overlayClassName={classes(classNames.overlay, centralize ? CommonCss.centralizeChildren : "", overlayClassName)}
        className={classes(classNames.content, contentClassName)}
        bodyOpenClassName={"modal-open"}
        onRequestClose={this.handleClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        {...rest}
      >
        <CloseButton className={classNames.closeButton} onClick={this.handleClose}/>
        <div>
          {children}
        </div>
      </ReactModal>
    );
  }

  @autobind
  private handleClose(): void {
    this.props.onClose();
  }
}
