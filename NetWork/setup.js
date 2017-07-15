/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ImageBackground
} from 'react-native';

export default class setup extends Component {

    constructor(props){
        super(props);
        this.state={
            data : '123'
        }
    }

    // 很慢，，，，
    fetchData(){

        fetch('http://bbs.reactnative.cn/api/category/3'/*,{
        // 参数设置
            method : 'get',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                wd : '你好'
            })
          //    body : 'wd=你好'  有时 json.stringfy 无法起作用 用这个代替一下
        }*/).then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson.topics[0].title);

                this.setState({
                    data : responseJson.topics[0].title,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    setNet(){

        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                this.setState({
                    data : request.responseText,
                });
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'http://bbs.reactnative.cn/api/category/3');
        request.send();
    }

    render() {

        var pic = require('./tpp.png');
        //  image 引用了Android drawable 里面的图片
        return (
            <View>
                <Text
                    onPress={()=>{
                        //  this.fetchData();
                        this.setNet();
                    }}
                >{this.state.data}</Text>

                <Image
                    source={{uri : 'test'}}
                    style={{width: 40, height: 40}}
                />

                <Image
                    source={pic}
                    style={{width: 40, height: 40}}
                />

                <Image
                    source={{uri : 'https://facebook.github.io/react/img/logo_og.png'}}
                    style={{width : 40, height : 40}}
                />
                <ImageBackground
                    style={{width:50,height:50,}}
                    source={{uri : 'https://facebook.github.io/react/img/logo_og.png'}} >
                    <Text style={{width:40,height:40,}} >Inside</Text>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});