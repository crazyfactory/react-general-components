import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {Modal} from "./Modal";

export default {
  component: Modal,
  title: "Modal"
};

export const Simple = ({state, setState}) => (
  <div>
    <span onClick={() => setState({isOpen: true})} style={{cursor: "pointer"}}>
      Click to open Modal
    </span>
    <Modal centralize={true} onClose={() => setState({isOpen: false})} isOpen={state.isOpen}>
      Simple Modal... <br/>
      a <br/>
      b <br/>
      c
    </Modal>
  </div>
);
Simple.story = {
  decorators: [withInitialState({isOpen: false})]
};
