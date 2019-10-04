import {Color, CommonCss} from "@crazyfactory/frontend-commons";
import autobind from "autobind-decorator";
import * as React from "react";
import {classes, stylesheet} from "typestyle";
import {TabHead} from "./TabHead";

const classNames = stylesheet({
  head: {
    height: 60,
    padding: "0 1.5em",
    position: "relative"
  },
  headActive: {
    color: Color.BLUE
  },
  headBorder: {
    bottom: 0,
    position: "absolute",
    width: "100%"
  },
  headBorderActive: {
    backgroundColor: Color.BLUE,
    height: 4
  },
  headBorderInactive: {
    backgroundColor: Color.GREY,
    height: 1
  }
});

export interface ITab {
  content: JSX.Element | JSX.Element[];
  head: JSX.Element;
  onClick?: () => void;
}

interface IProps {
  activeTab?: number;
  headClassName?: string;
  headContainerClassName?: string;
  headStyle?: React.CSSProperties;
  tabs: ITab[];
}

interface IState {
  activeTab: number;
}

export class TabsContainer extends React.PureComponent<IProps, IState> {
  public state: IState = {
    activeTab: this.props.activeTab || 0
  };

  public static getDerivedStateFromProps(props: IProps, state: IState): IState {
    if (props.activeTab && props.activeTab !== state.activeTab) {
      return {
        activeTab: props.activeTab
      };
    }
    return null;
  }

  public render(): JSX.Element {
    const {headContainerClassName, tabs} = this.props;
    return (
      <>
        <div className={classes(CommonCss.flex, headContainerClassName)}>
          {this.renderHeads(tabs)}
        </div>
        <div>
          {this.renderContents(tabs)}
        </div>
      </>
    );
  }

  @autobind
  private renderHeads(tabs: ITab[]): JSX.Element[] {
    const {headClassName, headStyle} = this.props;
    const {activeTab} = this.state;
    return tabs.map((tab, i) => {
      const headClassNames = classes(
        classNames.head,
        i === activeTab ? classNames.headActive : "",
        CommonCss.centralizeChildren,
        CommonCss.pointer,
        headClassName
      );
      const borderClassNames = classes(
        classNames.headBorder,
        i === activeTab ? classNames.headBorderActive : classNames.headBorderInactive
      );
      return (
        <TabHead
          className={headClassNames}
          style={headStyle}
          key={i}
          index={i}
          onClick={this.handleTabChange}
          customOnClick={tab.onClick}
        >
          {tab.head}
          <div className={borderClassNames}/>
        </TabHead>
      );
    });
  }

  @autobind
  private renderContents(tabs: ITab[]): JSX.Element[] {
    const {activeTab} = this.state;
    return tabs.map((tab, i) => (
      <div className={i === activeTab ? "" : CommonCss.hide} key={i}>
        {tab.content}
      </div>
    ));
  }

  @autobind
  private handleTabChange(activeTab: number): void {
    this.setState({activeTab});
  }
}
