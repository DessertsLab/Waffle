import React from 'react';
import { Divider, Input, Button, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

class SupersetCtrols extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div>
          <Input
            addonBefore='External API Service'
            value={this.props.externalApiService}
            onChange={(e) =>
              this.props.onChange({ externalApiService: e.target.value })
            }
          />
          <Input
            addonBefore='External API Parameters'
            value={this.props.externalApiParam}
            onChange={(e) =>
              this.props.onChange({ externalApiParam: e.target.value })
            }
          />
          <Button onClick={() => this.props.onClick()}>生成表格</Button>
          <Divider orientation='left'>预览结果</Divider>
        </div>
      </ConfigProvider>
    );
  }
}

export default SupersetCtrols;
