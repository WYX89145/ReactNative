/**
 * Created by Ape on 2017/7/18.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Util from '../../utils/Util';



import TwitterPost from './TwitterPost';
import FacebookTabBar from './FacebookTabBar';


import Icon from "react-native-vector-icons/Ionicons";
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class TwitterTab extends Component{

    constructor() {
        super();
        this.state = {
            selectedTab:'主页',
            title:'主页',
        };
    }

    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }

    _updateTitle(obj) {
        const {i} = obj;
        let title = "";
        switch(i) {
            case 0:
                title = "主页";
                break;
            case 1:
                title = "通知";
                break;
            case 2:
                title = "私信";
                break;
            case 3:
                title = "我";
                break;
        }
        this.setState({
            title
        });
    }

    render(){
        /*const iosTabView = <TabBarIOS barTintColor="#fff" tintColor="#1b95e0">
                                <Icon.TabBarItem
                                    title="主页"
                                    iconName="ios-home-outline"
                                >

                                </Icon.TabBarItem>
                            </TabBarIOS>*/

        const androidTabView =<View>
                                    <View style={styles.navAndroid}>
                                        <View style={styles.logoContainer}>
                                            <Icon name="logo-twitter" color="#fff" size={27}/>
                                            <Text style={styles.title}>{this.state.title}</Text>
                                        </View>
                                        <View style={styles.iconContainer}>
                                            <Icon name="ios-search" color="#fff" size={25}/>
                                            <Icon name="ios-create-outline" color="#fff" size={25}/>
                                        </View>
                                    </View>
                                    <ScrollableTabView
                                        onChangeTab={ (obj)=> this._updateTitle(obj)}
                                        renderTabBar = {()=><FacebookTabBar/>}>
                                        <TwitterPost tabLabel="ios-home" />
                                        <TwitterPost tabLabel="ios-notifications" />
                                        <TwitterPost tabLabel="ios-mail" />
                                        <TwitterPost tabLabel="ios-person" />
                                    </ScrollableTabView>
                                </View>;

        return androidTabView;
    }

};

const styles = StyleSheet.create({
    navAndroid:{
        backgroundColor:"#3195d7",
        width:Util.size.width,
        height:55,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15,
        paddingLeft:20,
        paddingRight:10,
    },
    logoContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    title:{
        color:"#fff",
        fontSize:20,
        paddingLeft: 10
    },
    iconContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:60,
    },


});