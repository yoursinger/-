import {Image, View,Text,Animated,Easing,TouchableOpacity} from 'react-native';
import {Component} from 'react';
import * as React from 'react';
import styles from '../../style/guide'
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tts from 'react-native-tts';

//本组件的主要功能有：
//1.在各个教学组件完成后调用则执行
//2.弹半透明窗口，提示用户得到金币后，窗口消失
//3.出现对应金币音效
//4.在用户的数据项中coin值+n
