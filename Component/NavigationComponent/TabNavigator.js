/**
 * Created by Ape on 2017/7/1.
 */

import React from 'react';
import {
    Image,
} from 'react-native';

import  OneScreen from './OneScreen';
import  TwoScreen from './TwoScreen';
import  ThreeScreen from './ThreeScreen';


import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator(

    {
        One : {
            screen : OneScreen,
            navigationOptions: {
                /*tabBar: {
                    label: '11',
                    icon: () => (<Image source={require('./home.png')} />),
                }*/
                tabBarLabel : '111',
                tabBarIcon : (<Image source={require('./home.png')} />),
            }
        },

        Two : {
            screen : TwoScreen,
            navigationOptions: {
               /* tabBar: {
                    label: '22',
                    icon: () => (<Image source={require('./smile.png')} />),
                }*/
                tabBarLabel : '222',
                tabBarIcon : (<Image source={require('./home.png')} />),
            }
        },

        Three : {
            screen : ThreeScreen,
            navigationOptions: {
               /* tabBar: {
                    label: '33',
                    icon: () => (<Image source={require('./me.jpg')} />),
                }*/

                tabBarLabel : '333',
                tabBarIcon : () =>(<Image source={require('./home.png')} />),
            }
        },
    },{
        tabBarPosition: 'bottom',
        animationEnabled: true, // 切换页面时是否有动画效果
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转


        activeTintColor: '#ff0000', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true,
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        swipeEnabled: false, // 是否可以左右滑动切换tab
    }
);

export default Tabs;
