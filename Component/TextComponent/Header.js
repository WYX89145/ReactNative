/**
 * Created by LCN on 2017/6/28 0028.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio
} from 'react-native';

export default  class Header extends Component {

    render (){
        return (
            <View style = {styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        ) ;
    }
}

const styles = StyleSheet.create({
    flex : {
        marginTop : 50,
        height : 50,
        borderBottomWidth : 3/PixelRatio.get(),
        borderBottomColor : '#EF2d36',
        justifyContent : 'center'
    },
    font : {
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center',
    },
    font_1 : {
        color : '#cd1d1c'
    },
    font_2 : {
        color : '#fff',
        backgroundColor : '#cd1d1c'
    }
});