import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile189879Navigator from '../features/UserProfile189879/navigator';
import Tutorial189878Navigator from '../features/Tutorial189878/navigator';
import NotificationList189850Navigator from '../features/NotificationList189850/navigator';
import Settings189849Navigator from '../features/Settings189849/navigator';
import Settings189841Navigator from '../features/Settings189841/navigator';
import UserProfile189839Navigator from '../features/UserProfile189839/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile189879: { screen: UserProfile189879Navigator },
Tutorial189878: { screen: Tutorial189878Navigator },
NotificationList189850: { screen: NotificationList189850Navigator },
Settings189849: { screen: Settings189849Navigator },
Settings189841: { screen: Settings189841Navigator },
UserProfile189839: { screen: UserProfile189839Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
