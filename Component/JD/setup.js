/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import MainScreen from "./MainScreen";

export default class setup extends Component {
    render() {
        return (
            <MainScreen/>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

