import React from 'react';
import { Link } from 'react-router';

export default class OtherPageWidget extends React.Component {
  render() {
    return (
      <div>
        <h3>
          This is another page!
        </h3>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
