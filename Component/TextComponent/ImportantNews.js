/**
 * Created by LCN on 2017/6/28 0028.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ImportantNews extends Component{

    // 点击触发事件
    show (title){
        alert(title);
    }
    render(){
        var news = [];
        for (var i in  this.props.news){
            var text = (
                // warning  ; Each child in an array or iterator should have an unique "key" prop
                <Text
                    key={i}
                    onPress={ ()=>{
                        console.log(this.props.news[i]);
                        //  此处打印出来的 this.props.news[i] 为 数组 news 的最后一项
                        this.show(this.props.news[i]);
                    }}
                    numberOfLines={2}
                    style={styles.new_item}
                >{'\t'}{this.props.news[i]}</Text>
            );
            news.push(text);
        }
        return (
            <View>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    flex : {
        flex : 1,
    },
    news_title : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#cd1d1c',
        marginTop : 10,
        marginLeft : 15,
    },
    new_item : {
        height : 24,
        marginLeft: 10,
        marginRight : 15,
        lineHeight : 24,
        fontSize : 15,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd',
    }
});
