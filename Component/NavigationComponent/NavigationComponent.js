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
        navigationOptions: {
            headerRight: <Text>右边Header</Text>
        },
        header: {
            backTitle: '返回',  // 左上角返回键文字
            style: {
                backgroundColor: '#fff'
            },
            titleStyle: {
                color: 'green'
            }
        },
        initialRouteName: 'Home',
        initialRouteParams: { name: '小明'},
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen',  // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
        onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调

    }

);

// 导出这个对象，其他页面可以通过这个显示页面
export default NavigationComponent;

