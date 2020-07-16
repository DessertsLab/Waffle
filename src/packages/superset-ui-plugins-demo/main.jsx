import React, { Component } from 'react';
import ApiTable from '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable';
import '../superset-ui-legacy-plugin-chart-api-table/src/ApiTable.css';
import Controls from '../../controls/Controls';

class MainDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      externalApiService: 'reports',
      externalApiParam: 's_arima_main',
      // externalApiParam: 's_1001_main',
    };
  }

  handleChange(s) {
    this.setState(s);
  }

  render() {
    return (
      <div className='pannel-body'>
        <Controls
          externalApiService={this.state.externalApiService}
          externalApiParam={this.state.externalApiParam}
          onChange={(e) => this.handleChange(e)}
        />
        <ApiTable
          externalApiService={this.state.externalApiService}
          externalApiParam={this.state.externalApiParam}
        />
      </div>
    );
  }
}

export default MainDemo;
