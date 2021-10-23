import { Component } from "react";
import Header from "./Header";

// 全画面に共通する外枠部分（ヘッダとフッタ）
export default class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-grow w-full z-10">
          {this.props.children}
        </div>
      </div>)
  }
}
