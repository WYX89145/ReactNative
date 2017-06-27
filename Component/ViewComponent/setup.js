/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import ViewComponent from './ViewComponent';

export default class setup extends Component {
    render() {
        return (
            <View>
                <ViewComponent/>
                <ViewComponent/>
            </View>
        );
    }
}

