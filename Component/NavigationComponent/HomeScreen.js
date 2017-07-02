/**
 * Created by LCN on 2017/6/28 0028.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

/*  在使用前需要 导入 对应的包  ， 在自己的项目下  npm install --save react-navigation 安装包 */

import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {

    static navigationOptions = {
        /*设置标题*/
        title: 'Welcome',
    };

    /*  通过 navigate 跳转到 别名为 Chat的页面，并传递一个对象 key : value */
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{backgroundColor: '#eef123', flex : 1 }}>
                <Text>你好啊</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'Lucy'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
};
