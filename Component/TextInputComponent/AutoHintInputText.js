/**
 * Created by Ape on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio,
} from 'react-native';

var onePt = 1/PixelRatio.get();

export default class AutoHintTextInput extends Component {

    constructor(props){
      super(props);
      this.state = {
          show : false,
          hint : '请输入搜索内容',
          value : '',
      }
    };


 /*
  设置默认 props
  static  defaultProps = {
        hint : '请输入搜索内容',
        show : false,
    };*/

    getValue(text){
        var value = text;
        this.setState({
            show : true,
            value : value,
        });
    };

    hide(text){
        alert('搜索内容为'+text);
        this.setState({
            value : '',
            show : false,
        });
    }

    render () {
        return (
           <View style={styles.flex}>
               <View style={styles.flexDirection}>
                    <View style={styles.flex}>
                        <TextInput
                            style={styles.input}
                            placeholder={this.state.hint}
                            returnKeyType="search"
                            value={this.state.value}
                            onChangeText={(text)=>{
                                this.getValue(text);
                            }}
                        />
                    </View>
                    <View style={styles.btn}>
                       <Text style={styles.search} onPress={()=>{ this.hide(this.state.value)}}>搜索</Text>
                    </View>
               </View>
               {this.state.show ?
                   <View style={styles.result}>
                       <Text
                        numberOfLines={1}
                        style={styles.item}
                        onPress={()=>{this.hide(this.state.value+'庄')}}
                       >{this.state.value}庄</Text>
                       <Text
                           numberOfLines={1}
                           style={styles.item}
                           onPress={()=>{this.hide(this.state.value+'园街')}}
                       >{this.state.value}园街</Text>
                   </View>
                   : null
               }
           </View>
        );
    }
}

const styles = StyleSheet.create({
    flex : {
        flex : 1,
    },
    flexDirection : {
        flexDirection: 'row',
        height : 45,
    },
    input : {
        height : 45,
        borderWidth : 1,
        marginLeft : 5,
        paddingLeft : 5,
        borderColor : '#ccc',
        borderRadius : 4,
        lineHeight : 45 ,
        fontSize : 22,
    },
    btn : {
        width :55,
        marginRight : 5,
        marginLeft: -5,
        backgroundColor: "#23Bfff",
        height: 45,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 4,
    },
    search : {
        color : '#fff',
        fontSize: 15,
        fontWeight :'bold'
    },
    result : {
        marginTop : onePt,
        marginLeft : 5,
        marginRight: 5,
        height : 200,
        borderWidth : onePt,
        borderColor : '#ccc'
    },
    item : {
        padding :5,
        paddingTop : 10,
        paddingBottom : 10,
        fontSize : 16,
        borderWidth : onePt,
        borderColor : '#ddd',
        borderTopWidth : 0
    }
});