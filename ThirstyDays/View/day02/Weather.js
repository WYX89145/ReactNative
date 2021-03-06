/**
 * Created by Ape on 2017/7/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

/* npm i react-native-swiper --save */
import Swiper from 'react-native-swiper';

import Util from '../../utils/Util';

/*
* 矢量图标的使用，有些麻烦
* 1,在你的工程下面执行命令行
*   （1）npm install react-native-vector-icons -–save
*   （2）npm install rnpm -g
*   （3）rnpm link
* 2,Android : 把node_modules/react-native-vector-icons/Fonts目录下字体文件全部拷到 android/app/src/main/assets/Fonts目录
* 3,进入你的工程 react-native run-android就可以自动下载依赖包然后就可以成功显示
*
* 2，IOS 在Finder中用Xcode打开工程: …/Demo/ios/Demo.xcodeproj
* 3,右键工程文件Add Files to “(你工程名)”
* 4,选择node_modules/react-native-vector-icons/Fonts文件
* 5,点击”完成”.
* */

/* 数据源 建议看一下data/data.json 里面的排版好的数据,知道结构后，对下面的布局有了解*/

const weatherData = [{key:0,city:"\u798f\u5dde",night:!0,bg:require("./img/w2.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"},{key:1,city:"\u5361\u5c14\u52a0\u91cc",night:!1,bg:require("./img/w3.png"),abs:"\u5927\u90e8\u6674\u6717",degree:15,today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},{key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},{key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},{key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},{key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},{key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},{key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},{key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},{key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},{key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},{key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},{key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},{key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},{key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},{key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},{key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},{key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},{key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},{key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},{key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},{key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},{key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},{key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},{key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},{key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",rise:"06:21",down:"18:06",prop:"10%",humi:"94%",dir:"\u4e1c\u5317\u504f\u5317",speed:"3\u5343\u7c73\uff0f\u5c0f\u65f6",feel:"15\xb0",rain:"0.0 \u5398\u7c73",pres:"1,016 \u767e\u5e15",sight:"5.0 \u516c\u91cc",uv:"0"}];


export default class Weather extends Component{

    static propTypes = {
        back : React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            weather : weatherData,
        }
    }

    componentDidMount(){
        if(Platform.OS === "ios"){
            StatusBar.setBarStyle(1);
        }
    }

    _back(){
        this.props.back();
    }

    render(){

        /* 学会用数组的map 方法，可以省略很多时间 */

        /* 在此数据中有2个数组 elem:每个数组中的项，index: 数组的索引 1，2 */
        const slides = this.state.weather.map((elem, index)=>{

            const hourView = elem.hours.map((hourElem, hourIndex) => {
                return (
                    <View key={hourElem.key} style={styles.withinDayHoursBox}>
                        <Text style={ hourIndex === 0 ? styles.withinDayHoursTimeBold: styles.withinDayHoursTime}>{hourElem.time}</Text>
                        <Icon name={hourElem.icon} size={25} style={[styles.withinDayHoursIcon,{color : hourElem.color}]}/>
                        <Text style={hourIndex=== 0 ? styles.withinDayHoursDegreeBold:styles.withinDayHoursDegree}>{hourElem.degree}</Text>
                    </View>
                );
            });

            const dayView = elem.days.map((dayElem, dayIndex)=>{
                return (
                    <View key={dayElem.key} style={styles.withinWeekLine}>
                        <View style={styles.withinWeekDay} >
                            <Text style={styles.withinWeekDayText} >{dayElem.day}</Text>
                        </View>
                        <View style={styles.withinWeekIcon}>
                            <Icon name={dayElem.icon} size={25} style={styles.withinWeekIconIcon}/>
                        </View>
                        <View style={styles.withinWeekDegree}>
                            <Text style={styles.withinWeekHigh}>{dayElem.high}</Text>
                            <Text style={elem.night ? styles.withinWeekLowNight:styles.withinWeekLow }>{dayElem.low}</Text>
                        </View>
                    </View>
                );
            });

            return(
                <View key={elem.key}>
                    <Image style={styles.image} source={elem.bg}/>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.pageContainer}>
                        <View style={styles.headInfo}>
                            <Text style={styles.city}>{elem.city}</Text>
                            <Text style={styles.abs}>{elem.abs}</Text>
                            <Text style={styles.degree}>{elem.degree}</Text>
                            <Text style={styles.circle}>°</Text>
                        </View>

                        <View style={styles.withinDayGeneral}>
                            <View style={styles.withinDayHead}>
                                <Text style={styles.withinDayWeek}>{elem.today.week}</Text>
                                <Text style={styles.withinDayDay}>{elem.today.day}</Text>
                            </View>
                            <View style={styles.withinDayTail}>
                                <Text style={styles.withinDayHigh}>{elem.today.high}</Text>
                                <Text style={elem.night?styles.withinDayLowNight:styles.withinDayLow}>{elem.today.low}</Text>
                            </View>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.withinDayHoursContainer}>
                            <View style={styles.withinDayHours}>
                                {hourView}
                            </View>
                        </ScrollView>

                        <View style={styles.withinWeek}>
                            {dayView}
                        </View>

                        <View style={styles.weatherInfo}>
                            <Text style={styles.weatherInfoText}>{elem.info}</Text>
                        </View>

                        <View style={styles.weatherOther}>
                            <Text style={styles.weatherOtherFont}>日出：{elem.rise}</Text>
                            <Text style={styles.weatherOtherFont}>日落：{elem.down}</Text>
                            <Text style={styles.weatherOtherFont}>降雨概率：{elem.prop}</Text>
                            <Text style={styles.weatherOtherFont}>湿度：{elem.humi}</Text>
                            <Text style={styles.weatherOtherFont}>
                                风速：<Text style={{fontSize:10}}>{elem.dir}</Text> {elem.speed}
                            </Text>
                            <Text style={styles.weatherOtherFont}>体感温度：{elem.feel}</Text>
                            <Text style={styles.weatherOtherFont}>降水量：{elem.rain}</Text>
                            <Text style={styles.weatherOtherFont}>气压：{elem.pres}</Text>
                            <Text style={styles.weatherOtherFont}>能见度：{elem.sight}</Text>
                            <Text style={styles.weatherOtherFont}>紫外线指数：{elem.uv}</Text>
                        </View>
                    </ScrollView>
                </View>
            );
        });

        return (
            <View>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    paginationStyle={{bottom:10, paddingTop:10, borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel}}
                    dot={<View style={styles.dotStyle} />}
                    activeDot={<View style={styles.activeDotStyle} />}>
                    {slides}
                </Swiper>
                <TouchableHighlight style={styles.backBtn} onPress={()=>this._back()}>
                    <Icon size={17} name="ios-list-outline" style={styles.backBtnIcon} />
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    withinDayHoursBox : {
      width : 55,
    },
    withinDayHoursTime:{
        color:"#fff",
        fontSize:12,
        textAlign:"center"
    },
    withinDayHoursTimeBold:{
        color:"#fff",
        fontSize:13,
        textAlign:"center",
        fontWeight:"500",
    },
    withinDayDay:{
        fontSize:15,
        color: "#fff",
        fontWeight: "300",
        width:50,
    },
    withinDayHoursIcon:{
        textAlign:"center",
        paddingTop:5,
    },
    withinDayHoursDegree:{
        color:"#fff",
        fontSize:14,
        paddingTop:5,
        textAlign:"center"
    },
    withinDayHoursDegreeBold:{
        color:"#fff",
        fontSize:15,
        textAlign:"center",
        paddingTop:5,
        fontWeight:"500"
    },


    withinWeekLine:{
        flexDirection:"row",
        height: 28
    },
    withinWeekDay:{
        justifyContent:"center",
        alignItems:"flex-start",
        flex:1,
    },
    withinWeekDayText:{
        color:"#fff",
        paddingLeft:20,
        fontSize:15,
    },
    withinWeekIcon:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    withinWeekIconIcon:{
        color:"#fff"
    },
    withinWeekDegree:{
        justifyContent:"flex-end",
        alignItems:"center",
        flex:1,
        flexDirection:"row",
        paddingRight:25,
    },
    withinWeekHigh:{
        color:"#fff",
        width:35,
        fontSize:16,
        textAlign:"right"
    },
    withinWeekLowNight:{
        color:"#aaa",
        width:35,
        fontSize:16,
        textAlign:"right"
    },
    withinWeekLow:{
        color:"#eee",
        width:35,
        fontSize:16,
        textAlign:"right"
    },


    image : {
        width : Util.size.width ,
        height : Util.size.height ,
    },
    pageContainer:{
        backgroundColor:"transparent",
        position: "absolute",
        width: Util.size.width,
        left:0,
        top: 20,
        height: Util.size.height - 53
    },
    headInfo:{
        paddingTop:70,
        alignItems:"center",
        paddingBottom:60,
    },
    city:{
        fontSize: 25,
        color:"#fff",
        paddingBottom: 5,
        backgroundColor:"transparent"
    },
    abs:{
        fontSize:15,
        color:"#fff",
        backgroundColor:"transparent"
    },
    degree:{
        fontSize:85,
        color:"#fff",
        fontWeight: "100",
    },
    circle:{
        fontSize:35,
        color:"#fff",
        fontWeight: "300",
        position:"absolute",
        top:130,
        right:Util.size.width/2-55,
    },


    withinDayGeneral:{
        flexDirection:"row",
        width: Util.size.width,
    },
    withinDayHead:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'flex-start',
        paddingLeft: 20,
    },
    withinDayWeek:{
        fontSize:15,
        color: "#fff",
        fontWeight: "400",
        width:50,
    },
    withinDayTail:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'flex-end',
        paddingRight: 10,
    },
    withinDayHigh:{
        fontSize:16,
        color: "#fff",
        fontWeight: "200",
        width:30,
    },
    withinDayLowNight:{
        fontSize:16,
        color: "#aaa",
        fontWeight: "200",
        width:30,
    },
    withinDayLow:{
        fontSize:16,
        color: "#eee",
        fontWeight: "200",
        width:30,
    },


    withinDayHoursContainer:{
        marginTop:3,
        borderBottomWidth : Util.pixel, borderBottomColor : "rgba(255,255,255,0.7)",
        borderTopWidth : Util.pixel, borderTopColor : "rgba(255,255,255,0.7)",
    },
    withinDayHours:{
        paddingLeft:7,paddingTop:10,paddingBottom:10,paddingRight:10,
        flexDirection:"row",
        flexWrap : 'nowrap',
    },
    withinWeek:{
        paddingTop:5
    },
    weatherInfo:{
        marginTop:5,
        borderTopColor:"rgba(255,255,255,0.7)", borderTopWidth:Util.pixel,
        borderBottomColor:"rgba(255,255,255,0.7)", borderBottomWidth:Util.pixel
    },
    weatherInfoText:{
        color:"#fff",
        fontSize:15,
        paddingTop:10,paddingLeft:20,paddingBottom:10,paddingRight:20,
    },


    weatherOther:{
        paddingTop:10,
        alignItems :'center',
    },
    weatherOtherFont:{
        color:"#fff",
        fontSize: 15,
        paddingBottom : 5,
    },

    wrapper: {
        backgroundColor: 'transparent'
    },

    backBtn:{
        position:"absolute",
        right:20,bottom:7
    },
    backBtnIcon:{
        color:"#fff"
    },
    dotStyle : {
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
    },
    activeDotStyle : {
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3, marginRight: 3, marginTop: 3,marginBottom: 3,
    }

});