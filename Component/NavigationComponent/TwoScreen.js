/**
 * Created by Ape on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

export default class TwoScreen extends Component{
    render (){
        return (
            <View>
                <Image source={require('./home.png')} />
                <Text>222</Text>
            </View>
        );
    }
}
