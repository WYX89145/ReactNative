/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import  ImageComponent from './ImageComponent';

var imgs = [
    'http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg',
    'http://img06.tooopen.com/images/20161128/tooopen_sy_188180739118.jpg'
];
export default class setup extends Component {
    render() {
        return (
            <View style={styles.margin}>
                <ImageComponent
                    imgs =  {imgs}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    margin : {
        flex : 1,
        marginTop : 25,
    }
});




