import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Home from './container/HomeContainer';
// import BlankPage from './container/BlankPageContainer';

const Drawer = DrawerNavigator({
  Home: { screen: Home },
});

const App = StackNavigator(
  {
    // BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },
);

export default () => (
  <Root>
    <App />
  </Root>
);
