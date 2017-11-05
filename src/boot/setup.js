import React from 'react';
import { Provider } from 'mobx-react/native';
import { StyleProvider } from 'native-base';

import App from '../App';
import getTheme from '../theme/components';
import variables from '../theme/variables/platform';

export default stores => (
  <StyleProvider style={getTheme(variables)}>
    <Provider {...stores}>
      <App />
    </Provider>
  </StyleProvider>
);
