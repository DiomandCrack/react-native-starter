/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class App extends Component{
  state={
    selectedTab:'tb_popular'
  }
  render() {
    return (
      <View style={styles.container} > 
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            title="热门"
            renderIcon={() => <Image source={require('./files/images/ic_popular.png')} style={styles.image}/>}
            selectedTitleStyle={{color:'cyan'}}
            renderSelectedIcon={() => <Image source={require('./files/images/ic_popular.png')} style={[styles.image,{tintColor:'cyan'}]}/>}
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.popular}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            renderIcon={() => <Image source={require('./files/images/ic_trending.png')} style={styles.image}/>}
            renderSelectedIcon={() => <Image source={require('./files/images/ic_trending.png')} style={[styles.image,{tintColor:'cyan'}]}/>}
            selectedTitleStyle={{color:'cyan'}}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.profile}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favourite'}
            title="收藏"
            renderIcon={() => <Image source={require('./files/images/ic_popular.png')} style={styles.image}/>}
            selectedTitleStyle={{color:'cyan'}}
            renderSelectedIcon={() => <Image source={require('./files/images/ic_popular.png')} style={[styles.image,{tintColor:'cyan'}]}/>}
            onPress={() => this.setState({ selectedTab: 'tb_favourite' })}>
            <View style={styles.favourite}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_me'}
            title="我的"
            renderIcon={() => <Image source={require('./files/images/ic_trending.png')} style={styles.image}/>}
            renderSelectedIcon={() => <Image source={require('./files/images/ic_trending.png')} style={[styles.image,{tintColor:'cyan'}]}/>}
            selectedTitleStyle={{color:'cyan'}}
            onPress={() => this.setState({ selectedTab: 'tb_me' })}>
            <View style={styles.me}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  popular:{
    flex:1,
    backgroundColor:'purple'
  },
  profile:{
    flex:1,
    backgroundColor:'#eee'
  },
  favourite:{
    flex:1,
    backgroundColor:'gray'
  },
  me:{
    flex:1,
    backgroundColor:'pink'
  },
  image:{
    height:22,
    width:22
  }
});
