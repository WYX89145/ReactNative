/**
 * Created by Ape on 2017/7/2.
 */


/*
* resizeMode : 'contain' 将图片的高或宽其中一个放大或缩小到 image 的高宽， 另一个 等比例缩小或扩大
*               ‘cover’ 默认值， 原大小显示，超出则减掉
*               ‘stretch’  拉伸 填满父级
* */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ImageComponent extends Component {

    constructor(props){
        super(props);
        var imgs = this.props.imgs;

        this.state = {
            count : 0,
            imgs : imgs,
        }
    };

    goPreview(count){
        count -- ;

        if(count<0){
           count = this.state.imgs.length-1;
        }

        this.setState({
            count : count,
        });
    };

    goNext(count){
     //   alert(this.state.count);
        count++;

        if(count === this.state.imgs.length){
            count =0;
        }

        this.setState({
            count : count,
        });
    };

    render(){

        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={{uri : this.state.imgs[this.state.count]}}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity
                        onPress={()=>{
                            this.goPreview(this.state.count);
                        }}
                    >
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>{
                            this.goNext(this.state.count);
                        }}
                    >
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    flex : {
        flex : 1,
        alignItems : 'center'
    },
    image : {
        width : 200,
        height : 300,
        borderWidth : 1,
        borderRadius : 5,
        borderColor : '#ccc',
        justifyContent : 'center',
        alignItems : 'center',
    },
    img : {
        height :150,
        width : 200,
    },
    btns : {
        flexDirection : 'row',
        justifyContent: 'center',
        marginTop : 20,
    },
    btn : {
        width :60,
        height : 30,
        borderColor: '#9900fe',
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 3,
        marginRight : 20
    }
});