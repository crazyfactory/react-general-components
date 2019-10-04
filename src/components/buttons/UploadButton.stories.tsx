import * as React from "react";
import {UploadButton} from "./UploadButton";

export default {
  component: UploadButton,
  title: "UploadButton"
};

export const Normal = () => (
  <UploadButton translations={{chooseFile: "Choose file"}}/>
);
