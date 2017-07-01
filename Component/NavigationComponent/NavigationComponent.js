/**
 * Created by LCN on 2017/6/28 0028.
 */

import React from 'react';
import {
    Text,
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

//
const NavigationComponent = StackNavigator(

    /*  路由设置 ， 通过 别名可以跳转到对应的页面*/
    /*  放在第一个的为首页，既第一个显示的*/
    {    Home: {screen: HomeScreen},
        Chat: {screen: ChatScreen},
    },

    /*
    StackNavigator配置
    * */
    {
        navigationOptions: {headerRight: <Text>右边Header</Text>},
        initialRouteName: 'Home',
        initialRouteParams: { name: '小明'},
    }

);

// 导出这个对象，其他页面可以通过这个显示页面
export default NavigationComponent;

