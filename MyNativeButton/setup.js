/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

var MyNativeButton = require('./MyNativeButton');

export default class setup extends Component {

    onShow(event){
        console.log(event);
    }

    render() {
        return (
            <View>
                <Text>123adf</Text>
                <MyNativeButton
                    onClick={this.onShow}
                    contentText="234" style={{width : 200, height:200, backgroundColor :'#123321'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});