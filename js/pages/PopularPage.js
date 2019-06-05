import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import NavigationUtil from '../navigator/NavigationUtil'

export default class PopularPage extends Component {
  constructor(props){
    super(props)
    this.tabNames = [
      'Vue',
      'React',
      'React Native',
      'AngularJs',
      'Java'
    ]
  }

  _genTabs() {
    const tabs = {}
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      };
    });
    return tabs
  }

  render() {
    const TopNavigator = createAppContainer(
      createMaterialTopTabNavigator(this._genTabs(), {
        tabBarOptions: {
          tabStyle: styles.tabStyle,
          upperCaseLabel: false,
          // 是否支持选项卡滚动，默认false,
          scrollEnabled: true,
          style: {
            // tabbar的背景颜色
            backgroundColor: "#678"
          },
          // 标签指示器样式，下面的线
          indicatorStyle: styles.indicatorStyle,
          // 文字的样式
          labelStyle: styles.labelStyle
        }
      })
    );
    return (
      <View style={{flex:1, paddingTop: 30}}>
        <TopNavigator />
      </View>
    );
  }
}

class PopularTab extends Component {
  render() {
    const { tabLabel } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text onPress={() => {
          NavigationUtil.goPage({
            navigation: this.props.navigation
          }, 'DetailPage')
        }}>跳转到详情页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: "#fff"
  },
  labelStyle: {
    fontSize: 13
  }
});
