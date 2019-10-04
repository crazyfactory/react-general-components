import * as React from "react";
import {withInitialState} from "../../helpers/withInitialState";
import {InfiniteScroll} from "./InfiniteScroll";

export default {
  component: InfiniteScroll,
  title: "InfiniteScroll"
};

export const Normal = ({state, setState}) => (
  <InfiniteScroll
    hasMore={state.hasMore}
    isLoading={state.isLoading}
    onLoadMore={() => {
      setState({isLoading: true});
      if (state.count > 4) {
        setState({isLoading: false, hasMore: false});
      } else {
        const newItems = Array.from({length: 100}, (_, i) => i + (100 * state.count));
        setTimeout(
          () => {
            setState({
              count: state.count + 1,
              isLoading: false,
              items: [...state.items, ...newItems]
            });
          },
          1000
        );
      }
    }}
  >
    {state.items.map((item) => <div key={item}>{item}</div>)}
    {state.isLoading && <div>Loading...</div>}
  </InfiniteScroll>
);
Normal.story = {
  decorators: [withInitialState({
    count: 1,
    hasMore: true,
    isLoading: false,
    items: Array.from({length: 100}, (_, i) => i)
  })]
};
