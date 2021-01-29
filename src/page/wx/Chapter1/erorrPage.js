import React,{Component} from 'react';
import {View,Text,Button,Animated,Easing,Image} from 'react-native';
import styles from '../../../style/guide';

//错误提示页面
//提示用户使用返回键返回之前的页面

export default class errorPage extends Component{
    render() {
        return(
            <Text style={styles.text} >点击返回键</Text>
        )
    }
}
