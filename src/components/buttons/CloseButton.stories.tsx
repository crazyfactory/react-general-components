import * as React from "react";
import {CloseButton} from "./CloseButton";

export default {
  component: CloseButton,
  title: "CloseButton"
};

export const Normal = () => (
  <CloseButton onClick={() => console.info("clicked!")}/>
);
