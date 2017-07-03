/**
 * Created by Ape on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    WebView,
} from 'react-native';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class WebViewComponent extends Component {

    render () {
        return (
            <View style={{flex : 1}}>
                <WebView
                    source={{uri : 'http://www.weibo.com'}}
                    bounces={false}
                    injectedJavaScript="alert('欢迎加入ReactNative')"
                    style={{width : width, height : height}}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});