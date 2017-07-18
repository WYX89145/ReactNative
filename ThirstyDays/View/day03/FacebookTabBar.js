/**
 * Created by Ape on 2017/7/18.
 */


import React,{ Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";


var tabIcons = [];

export default class FacebookTabBar extends Component{



    static propTypes: {
        goToPage : React.PropTypes.func.isRequired,
        activieTab : React.PropTypes.number,
        tabs : React.PropTypes.array,
    };

    componentDidMount(){
        setTimeout(()=> this.props.goToPage(0),0);
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    }

    setAnimationValue({value}){
        tabIcons.forEach((icon,i)=>{
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: ()=>{this.iconColor(progress)}
                },
            });
        });
    }

    iconColor(progress) {
        const red = 49 + (159 - 49) * progress;
        const green = 149 + (159 - 149) * progress;
        const blue = 215 + (159 - 215) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    render() {
        return <View style={[styles.tabs, this.props.style, ]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity key={tab} onPress={() => setTimeout( () => this.props.goToPage(i), 0 )} style={styles.tab}>
                    <Icon
                        name={tab}
                        size={30}
                        color={this.props.activeTab === i ? 'rgb(49,149,215)' : 'rgb(159,159,159)'}
                        ref={(icon) => { tabIcons[i] = icon; }}
                    />
                </TouchableOpacity>;
            })}
        </View>;
    }
};



const styles= StyleSheet.create({
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        backgroundColor:"#111"
    },
});

