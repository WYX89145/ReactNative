/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    SectionList,
    View,
} from 'react-native';


/*
*   renderItem = {({item})=>{<Text style={styles.item}>{item}</Text>}}

 renderSectionHeader = {({section})=>{<Text style={styles.header}>{section.title}</Text>}}

 renderItem = {({item})=>{<Text style={styles.item}>{item}</Text>}}

 renderSectionHeader = {({section})=>{<Text style={styles.header}>{section.title}</Text>}}
*
* */
export default class SectionListComponent extends Component{
    render (){
        return (
            <View style={{flex : 1}}>
                <SectionList
                    sections={[
                        {title : '标题1', data : ['内容1','内容2']},
                        {title : '标题2', data : ['内容1','内容2','内容3']},
                    ]}

                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}

                    renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    item : {
        color : 'blue',
        marginLeft : 5,
    },
    header : {
        color : 'orange',
        fontSize : 20,
    }
});