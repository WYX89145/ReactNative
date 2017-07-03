/**
 * Created by Ape on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

export default class TextInputComponent extends Component {

    render () {
        return (
             <View style={styles.flex}>
                 <View style={styles.flexToOne}>
                     <TextInput style={styles.input} returnKeyType="search" underlineColorAndroid="transparent"/>
                 </View>
                 <View style={styles.btn}>
                     <Text>搜索</Text>
                 </View>
             </View>
        );
    }
};

const styles = StyleSheet.create({

    flex : {
        flexDirection : 'row'
    },

    flexToOne : {
        flex : 1,
        padding : 0,
    },
    input : {
        height : 45,
        borderWidth : 1,
        marginLeft : 5,
        paddingLeft : 5,
        borderColor : '#ccc',
        borderRadius : 4,
        lineHeight : 45 ,
        fontSize : 22,
    },
    btn : {
        width :55,
        marginRight : 5,
        marginLeft: -5,
        backgroundColor: "#23Bfff",
        height: 45,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 4,
    }
});