/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Header from './Header';
import NewList from './NewList';
import ImportantNews from './ImportantNews';

export default class TextComponent extends Component {
    //  用于显示文本 ，支持多层嵌套
    //  支持一个 onPress 方法 既点击事件
    //  属性 numberOfLines : num;  用于限制显示多少行， 其余...表示
    //  onLayout  参数是一个函数 ，  用于获取 布局的参数
    render(){
        return (
            <View>
                <Header />
                <NewList title ="今天天气不错"/>
                <NewList title ="午饭吃什么"/>
                <NewList title ="不知道呢"/>
                <NewList title ="叫外卖？"/>
                <ImportantNews news={[
                    '1,233',
                    '2,666',
                    '3,999'
                ]}/>
            </View>
        );
    }
};
