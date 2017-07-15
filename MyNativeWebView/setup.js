/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

/* WebView  不需要和文件名，控件名相同*/
var WebView=require('./MyWebView');

export default class setup extends Component {
    render() {
        return (
            <View>
                <WebView url="http://www.baidu.com" style={{width:200,height:400}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});