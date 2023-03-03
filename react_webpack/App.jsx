import React from 'react';
import logo from './11.png';
import { Button } from 'antd';


export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div style={{}}>
        <p>基本档</p>
        <div style={{ color: 'redS' }}>基本档</div>
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">子项目 - antd - 测试</Button>
      </div>
    );
  }
}
