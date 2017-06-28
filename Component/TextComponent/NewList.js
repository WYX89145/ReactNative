/**
 * Created by LCN on 2017/6/28 0028.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class NewList extends Component {
    render(){
        return (
            <View style={styles.list_item} >
                <Text style={styles.list_font}>{this.props.title}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    flex : {
        flex : 1,
    },
    list_item : {
        height : 40,
        marginRight : 10,
        marginLeft : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd',
        justifyContent : 'center',
    },
    list_font : {
        fontSize : 16
    }
});
