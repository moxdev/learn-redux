import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
          <Link to="/">Moxstagram</Link>
          {React.cloneElement(this.props.children, this.props)}
        </h1>
      </div>
    );
  }
}

export default Main;

Main.propTypes = {
  children: PropTypes.node
};
