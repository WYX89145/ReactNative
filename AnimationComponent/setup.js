/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import FadeInView from './FadeInView';
import AnimattedText from "./AnimattedText";
import PressChange from './PressChange';
import InterpolateText from "./InterpolateText";
import ThreeTextAnimated from "./ThreeTextAnimated";


//Animated仅封装了四个可以动画化的组件：View、Text、Image和ScrollView
export default class setup extends Component {

    /*render() {
        return (
            <View style={{ flex : 1}}>
                <FadeInView style={{ height: 50, backgroundColor: 'powderblue',flex : 1}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>

                <AnimattedText/>

                <PressChange/>

                <InterpolateText/>
            </View>
        )
    }*/

    /*render (){
        return (
            <View style={{ flex : 1}} >
                <InterpolateText/>
            </View>
        );
    }*/

    render (){
        return (
            <View style={{ flex : 1}} >
                <ThreeTextAnimated/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});