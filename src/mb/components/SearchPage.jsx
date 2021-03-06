import React, { Component, PropTypes } from 'react';
import Icon from './Icon';
import classnames from 'classnames';

export default class Search extends Component {
  static propTypes = {
    searchValue: PropTypes.string.isRequired,
    searchResult: PropTypes.array,
    actions: PropTypes.shape({
      search: PropTypes.func.isRequired,
      setSearchValue: PropTypes.func.isRequired,
    })
  };

  static default = {
    searchValue: null,
    searchResult: null,
    actions: null,
  };

  state = {
    data: this.props.searchResult
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchValue !== this.props.searchValue) {
      this.props.actions.search(nextProps.searchValue);
    }
  }

  render() {
    if (this.props.searchResult) {
      return (<div className="mb-search-page">
      </div>);
    }
    return null;
  }
}
