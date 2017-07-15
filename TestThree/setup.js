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

    onWebViewScroll(event){
        console.log(event);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    onScrollChange={this.onWebViewScroll}
                    url="https://reactnative.cn/docs/0.46/native-component-android.html#content"
                    style={{width:'100%',height:400}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});