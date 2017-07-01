/**
 * Created by LCN on 2017/6/28 0028.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/*  在使用前需要 导入 对应的包  ， 在自己的项目下  npm install --save react-navigation 安装包 */

import { StackNavigator } from 'react-navigation';

export default class ChatScreen extends Component {

    static navigationOptions = {
        title : 'Chat',
    };

    render() {
        /*  通过 navigation.state   可以获取到上一级传递过来的对象*/
        const {params} = this.props.navigation.state;
        return (
            <Text>
                Chat with {params.user}
            </Text>
        );
    }
}
