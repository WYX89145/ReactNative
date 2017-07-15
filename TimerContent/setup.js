/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import TimeoutContent from "./TimeoutContent";
import IntervalContent from "./IntervalContent";

export default class setup extends Component {
    render() {
        return (
            <View>
                <TimeoutContent/>
                <IntervalContent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});