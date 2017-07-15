/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import FlatListComponent from './FlatListComponent';
import ScrollViewComponent from './ScrollViewComponent';
import SectionListComponent from './SectionListComponent';

export default class setup extends Component {
    render() {
        return (
            <View style={{flexDirection : 'row'}}>
                <FlatListComponent/>
                <SectionListComponent/>
                <ScrollViewComponent/>
            </View>
        );
    }
};

const style = StyleSheet.create({

});