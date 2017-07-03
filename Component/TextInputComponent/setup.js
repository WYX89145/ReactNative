/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import  TextInputComponent from './TextInputComponent';
import AutoHintInputText  from './AutoHintInputText';

export default class setup extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <TextInputComponent />
                <AutoHintInputText />
            </View>

        );
    }
};

const styles = StyleSheet.create({
    flex : {
        flex : 1,
        marginTop : 25,
    }
});



