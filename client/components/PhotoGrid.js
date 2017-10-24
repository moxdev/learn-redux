import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    );
  }
}

export default PhotoGrid;

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
