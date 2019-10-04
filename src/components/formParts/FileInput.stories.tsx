import * as React from "react";
import {FileInput} from "./FileInput";

export default {
  component: FileInput,
  title: "FileInput"
};

export const Normal = () => (
  <FileInput translations={{chooseFile: "Choose File"}}/>
);
