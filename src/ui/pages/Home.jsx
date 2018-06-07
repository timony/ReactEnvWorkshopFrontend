import React from 'react';
import PropTypes from 'prop-types';

import {homeLabel} from '../../services/functions';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Stranger'};
  }

  render() {
    const element = (
      <div>{homeLabel(this.props.value)}</div>
    );

    return (
      element
    );
  }
}

Home.propTypes = {
  value: PropTypes.string
};

export default Home;
