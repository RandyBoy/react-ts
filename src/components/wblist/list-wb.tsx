import * as React from 'react';
import OneWB from './one-wb';
import {ListWbProps} from './list-wb-prop';
require('./wblist.css');
export default class ListWB extends React.Component<{ data: ListWbProps[] }, {}> {
  render() {
    // 遍历后端给的数据，并且插入
    let oneWBNodes = this.props
      .data
      .map((aWB, index) => {
        return <OneWB oneData={aWB} key={index} ></OneWB>;
      });
    return <div>
      {oneWBNodes}
    </div>;
  }
}