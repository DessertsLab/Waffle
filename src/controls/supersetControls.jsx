import React from 'react';
import { Divider, Input, Button, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';

class SupersetCtrols extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div>
          <Input
            addonBefore='External API Service'
            onChange={e =>
              this.props.onChange({ externalApiService: e.target.value })
            }
          />
          <Input
            addonBefore='External API Parameters'
            onChange={e =>
              this.props.onChange({ externalApiParam: e.target.value })
            }
          />
          <Button onClick={() => this.props.onClick()}>生成表格</Button>
          <Divider orientation='left'>预览结果</Divider>
        </div>
      </LocaleProvider>
    );
  }
}

export default SupersetCtrols;
