/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

export default class FlatListComponent extends Component {
    render(){

        return (
            <View style={{flex : 1}}>
                <FlatList
                    data={[
                        {key:'张三'},
                        {key:'李四'},
                        {key:'张吴'},
                        {key:'李六'}
                    ]}
                    renderItem = {({item})=><Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
};


const styles = StyleSheet.create({
    item : {
        color : 'blue',
        fontSize : 16,
    }
});