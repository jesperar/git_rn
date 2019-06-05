import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Trendingpage extends Component {
  render() {
    // 取出navigation button 设置值 在Dynamic组件里的props.navigation.state里取出来
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Trendingpage!</Text>
        <Button 
          title="改变颜色"
          onPress={()=> {
            navigation.setParams({
              theme: {
                tintColor: 'red',
                updateTime: new Date().getTime()
              }
            })
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
