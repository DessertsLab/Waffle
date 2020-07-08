import React, { Component } from 'react';
import ApiTable from '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable';
import '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable.css';
import SupersetControls from '../../controls/supersetControls';

class MainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalApiService: 'reports',
      externalApiParam: 's_sachima_funnel_example',
      nRefresh: 0,
    };
  }

  handleClick() {
    this.setState({ nRefresh: this.state.nRefresh + 1 });
  }

  handleChange(s) {
    this.setState(s);
  }

  render() {

    return (
      <div className='pannel-body'>
        <SupersetControls
          externalApiService={this.state.externalApiService}
          externalApiParam={this.state.externalApiParam}
          onClick={() => this.handleClick()}
          onChange={e => this.handleChange(e)}
        />
        {this.state.nRefresh ? (
          <ApiTable
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
