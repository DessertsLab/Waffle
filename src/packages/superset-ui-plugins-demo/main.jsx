import React, { Component } from 'react';
import ApiTable from '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable';
import '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable.css';
import SupersetControls from '../../controls/supersetControls';

class MainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalApiService: '',
      externalApiParam: '',
      isRefresh: false,
    };
  }

  handleClick() {
    this.setState({ isRefresh: true });
  }

  handleChange(s) {
    this.setState(s);
    this.setState({ isRefresh: false });
  }

  render() {
    return (
      <div className='pannel-body'>
        <SupersetControls
          onClick={() => this.handleClick()}
          onChange={e => this.handleChange(e)}
        />
        {this.state.isRefresh ? (
          <ApiTable
            //   externalApiService='/api/v1/reports/test1'
            externalApiService={this.state.externalApiService}
            externalApiParam={this.state.externalApiParam}
          />
        ) : (
          <p>请输入参数，生成表格</p>
        )}
      </div>
    );
  }
}

export default MainDemo;
