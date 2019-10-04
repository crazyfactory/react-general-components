import * as React from "react";
const debounce = require("debounce");

export interface IProps {
  debounce?: number;
  hasMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
  /**
   * How many pixels until we reach the end to trigger scrolling
   */
  threshold?: number;
}

export class InfiniteScroll extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    debounce: 100,
    threshold: 100
  };
  private sentinel: React.RefObject<HTMLDivElement> = React.createRef();
  private debouncedCheckWindowScroll: () => void = debounce(this.checkWindowScroll.bind(this), this.props.debounce);

  public render(): JSX.Element {
    const {children} = this.props;
    return (
      <div>
        {children}
        <div ref={this.sentinel}/>
      </div>
    );
  }

  public componentDidMount(): void {
    window.addEventListener("scroll", this.debouncedCheckWindowScroll);
    window.addEventListener("resize", this.debouncedCheckWindowScroll);
  }

  public componentWillUnmount(): void {
    window.removeEventListener("scroll", this.debouncedCheckWindowScroll);
    window.removeEventListener("resize", this.debouncedCheckWindowScroll);
  }

  private checkWindowScroll(): void {
    const {hasMore, isLoading, onLoadMore, threshold} = this.props;

    if (isLoading
      || !hasMore
      || this.sentinel.current.getBoundingClientRect().top - window.innerHeight >= threshold
    ) {
      return;
    }

    onLoadMore();
  }
}
