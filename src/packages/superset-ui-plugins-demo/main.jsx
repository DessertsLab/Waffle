import React, { Component } from 'react';
import ApiTable from '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable';
import '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable.css';
import Wrapper from '../../controls/wrapper';
import SupersetControls from '../../controls/supersetControls';

class MainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalApiService: 'reports',
      externalApiParam: 'sachima_example_filters',
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
    const compnt = (
      <ApiTable
        externalApiService={this.state.externalApiService}
        externalApiParam={this.state.externalApiParam}
      />
    );

    return (
      <div className='pannel-body'>
        <SupersetControls
          externalApiService={this.state.externalApiService}
          externalApiParam={this.state.externalApiParam}
          onClick={() => this.handleClick()}
          onChange={e => this.handleChange(e)}
        />
        {this.state.nRefresh ? (
          <Wrapper id={this.state.nRefresh} compnt={compnt} />
        ) : (
          <p>请输入参数，生成表格</p>
        )}
      </div>
    );
  }
}

export default MainDemo;
