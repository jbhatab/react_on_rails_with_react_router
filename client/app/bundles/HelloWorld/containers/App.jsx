import React from 'react';

export default class App extends React.Component {

  render() {
    return (
        <section>
          {this.props.children}
        </section>
    );
  }

}
