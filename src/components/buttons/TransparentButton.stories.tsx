import * as React from "react";
import {TransparentButton} from "./TransparentButton";

export default {
  component: TransparentButton,
  title: "TransparentButton"
};

export const Normal = () => (
  <TransparentButton
    onClick={(uniqueId) => console.info(`${uniqueId} removed!`)}
    uniqueId={1}
  >
    Remove
  </TransparentButton>
);
