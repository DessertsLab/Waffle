import React from 'react';
import { Divider, Input, Button, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

const WAIT_INTERVAL = 2000;
const ENTER_KEY = 13;

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      externalApiService: props.externalApiService,
      externalApiParam: props.externalApiParam
    };
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY) {
      this.triggerChange()
    }
  }

  triggerChange() {
    this.props.onChange(this.state)
  }

  handleServicesChange(e) {
    clearTimeout(this.timer)
    this.setState({ externalApiService: e.target.value })
    this.timer = setTimeout(() => { this.triggerChange() }, WAIT_INTERVAL)
  }

  handleParamChange(e) {
    clearTimeout(this.timer)
    this.setState({ externalApiParam: e.target.value })
    this.timer = setTimeout(() => { this.triggerChange() }, WAIT_INTERVAL)
  }

  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div>
          <Input
            addonBefore='External API Service'
            value={this.state.externalApiService}
            onChange={(e) => this.handleServicesChange(e)
            }
            onKeyDown={(e) =>
              this.handleKeyDown(e)
            }

          />
          <Input
            addonBefore='External API Parameters'
            value={this.state.externalApiParam}
            onChange={(e) => this.handleParamChange(e)
            }
            onKeyDown={(e) =>
              this.handleKeyDown(e)
            }
          />
        </div>
      </ConfigProvider>
    );
  }
}

export default Controls;
