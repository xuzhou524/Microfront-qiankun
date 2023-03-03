import React from 'react';
import { Button } from 'antd';

export default function Framework(props) {

  const { content, loading } = props;

  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  return (
    <>
      <header>
        <nav>
          <ol>
            <li><span onClick={() => goto('vuecli', '/vuecli')}>vue-cli</span></li>
            <li><span onClick={() => goto('creatreactapp', '/creatreactapp')}>creat-react-app</span></li>
            <li><span onClick={() => goto('ejectreact', '/ejectreact')}>eject-react</span></li>
            <li><span onClick={() => goto('reactwebpack', '/reactwebpack')}>react-webpack-基本档</span></li>
            <Button type="primary">主项目 - antd - 测试</Button>
          </ol>
        </nav>
      </header>
      {loading ? <div>loading...</div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>

  );
}
