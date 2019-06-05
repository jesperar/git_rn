import React, {Component} from 'react';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

export default class HomePage extends Component{
  render() {
    // 多层navigation嵌套，把最外层的保存到util类中，这样都可以访问了
    NavigationUtil.navigation = this.props.navigation
    return <DynamicTabNavigator />;
  }
}