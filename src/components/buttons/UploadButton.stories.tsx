import * as React from "react";
import {UploadButton} from "./UploadButton";

export default {
  component: UploadButton,
  title: "UploadButton"
};

export const Simple = () => (
  <UploadButton translations={{chooseFile: "Choose file"}}/>
);
