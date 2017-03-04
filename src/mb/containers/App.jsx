import React from 'react';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  static defaultProps = {
    children: []
  }

  render() {
    return (
      <div className="mb-app">
        <AppHeader />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}
