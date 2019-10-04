import * as React from "react";
import {TabsContainer} from "./TabsContainer";

export default {
  component: TabsContainer,
  title: "TabsContainer"
};

export const Simple = () => (
  <TabsContainer
    tabs={[
      {
        content: <div>Content 1</div>,
        head: <span>Shipping Address</span>,
        onClick: () => console.info("tab 1 clicked!")
      },
      {
        content: <div>Content 2</div>,
        head: <span>Billing Address</span>,
        onClick: () => console.info("tab 2 clicked!")
      }
    ]}
  />
);
