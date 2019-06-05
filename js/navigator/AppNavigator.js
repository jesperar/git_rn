import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      //禁用stackNavigator的navigation bar
      header: null
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null
    }
  }
});

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator
  },
  {
    navigationOptions: {
      header: null
    }
  }
))

export default AppContainer;