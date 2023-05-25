import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TelaInicial from './TelaInicial';
import TelaSecundaria from './Telasecundaria';

const AppNavigator = createStackNavigator(
  {
    TelaInicial: {
      screen: TelaInicial,
    },
    TelaSecundaria: {
      screen: TelaSecundaria,
    },
  },
  {
    initialRouteName: 'TelaInicial',
  }
);

export default createAppContainer(AppNavigator);
