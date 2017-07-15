/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

var WebView=require('./WebView');

export default class setup extends Component {
    render() {
        return (
            <View>
                <WebView  url="https://www.baidu.com" style={{width:200,height:400}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});