import React, { Component } from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import NavigationUtil from "../navigator/NavigationUtil";
import { BottomTabBar } from "react-navigation-tabs";

import PopularPage from "../pages/PopularPage";
import TrendingPage from "../pages/TrendingPage";
import FavoritePage from "../pages/FavoritePage";
import MyPage from "../pages/MyPage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: "最热",
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={"whatshot"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: "趋势",
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={"md-trending-up"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: "收藏",
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={"favorite"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo name={"user"} size={26} style={{ color: tintColor }} />
      )
    }
  }
};

export default class DynamicTabNavigator extends Component {
  constructor(props){
    super(props)
    console.disableYellowBox = true
  }
  _tabnavigator() {
    const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS;
    const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage };//根据需要定制显示的tab
    PopularPage.navigationOptions.tabBarLabel = '最热';//动态配置Tab属性
    return createAppContainer(createBottomTabNavigator(tabs, {
      // 改变颜色
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}/>
      }
    }));
  }
  render() {
    // 多层navigation嵌套，把最外层的保存到util类中，这样都可以访问了
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabnavigator();
    return <Tab />;
  }
}


class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }
  render(){
    const { routes, index } = this.props.navigation.state
    if(routes[index].params){
      const {theme} = routes[index].params
      if(theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme
      }
    }
    return <BottomTabBar 
      {...this.props}
      activeTintColor = {this.theme.tintColor || this.props.activeTintColor}
    />
  }
}