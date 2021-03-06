/**
 * Created by yuanguozheng on 16/1/19.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Header from './Header';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './home/HomePage';

const HOME = 'home';
const HOME_NORMAL = require('./image/tabs/home_normal.png');
const HOME_FOCUS = require('./image/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./image/tabs/category_normal.png');
const CATEGORY_FOCUS = require('./image/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('./image/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('./image/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('./image/tabs/cart_normal.png');
const CART_FOCUS = require('./image/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./image/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('./image/tabs/personal_focus.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{ flex:1, backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <Header />
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, MainScreen._createChildView(CATEGORY))}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, MainScreen._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, MainScreen._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, MainScreen._createChildView(PERSONAL))}
                </TabNavigator>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        bottom: -6,
    }
});
