import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react/native';

import Home from '../../stories/screens/Home';
import data from './data.json';

// export interface Props {
//   navigation: any;
//   mainStore: any;
// }
// export interface State {}

class HomeContainer extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    mainStore: PropTypes.any,
  };
  componentWillMount() {
    this.props.mainStore.fetchItems(data);
  }
  render() {
    const list = this.props.mainStore.items;
    return <Home navigation={this.props.navigation} list={list} />;
  }
}

export default inject('mainStore')(observer(HomeContainer));
