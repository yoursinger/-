import React,{Component} from 'react';
import {View,Text,Button,Animated,Easing,Image,ScrollView,TouchableHighlight,TouchableOpacity} from 'react-native';
import styles from '../../style/guide';
import IndexList from '../mymodel/IndexList';
import Tts from 'react-native-tts';


//设计一个简单直观的导航页面
//适用用用户，可以不同于现有导航
//2021.1.4 增加页面跳转
//使用匿名函数封装跳转以避免渲染的时候自动执行里面的函数
export default class Home extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ScrollView >
                <View style={styles.home}>
                    <View style={styles.home_row} >
                        <TouchableOpacity id={0} onPress={()=>{this.props.navigation.navigate('IndexList')}} >
                            <View style={[styles.home_block,{backgroundColor: "#ff5d5d"}]} >
                                <Text style={styles.text_home}>微信教程</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity id={1} onPress={()=>{this.props.navigation.navigate("IndexList")}}>
                            <View style={[styles.home_block,{backgroundColor: "#20f28d"}]}>
                                <Text style={styles.text_home}>支付宝教程</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.home_row}>
                        <TouchableOpacity id={2} onPress={()=>{this.props.navigation.navigate("IndexList")}}>
                            <View style={[styles.home_block,{backgroundColor: "#20e1f2"}]}>
                                <Text style={styles.text_home}>设置</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity id={3} onPress={()=>{this.props.navigation.navigate("IndexList")}}>
                            <View style={[styles.home_block,{backgroundColor: "#f0f220"}]}>
                                <Text style={styles.text_home}>奖励</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.home_row}>
                        <TouchableOpacity id={4} onPress={()=>{this.props.navigation.navigate("IndexList")}}>
                            <View style={[styles.home_block,{backgroundColor: "black"}]}>
                                <Text style={styles.text_home}>通用教程</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity id={4}>
                            <View style={[styles.home_block,{backgroundColor: "black"}]}>
                                <Text style={styles.text_home}>用户</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        )
    }
    componentDidMount(){
        Tts.setDefaultPitch(1.5);
        Tts.setDefaultRate(0.1);
        Tts.speak('这里是导航页面，您可以通过点击颜色块查看对应内容')}

}
