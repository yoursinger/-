
import {Image, View} from 'react-native';
import {Component} from 'react';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


export  default class  Welcome extends Component{

        render() {
            return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={require('../../image/logo.jpeg')}
                    style={{
                        resizeMode: 'center',
                    }}
                />
            </View>)
        }
        componentDidMount() {
            this.timer = setTimeout(
                () =>{
                    this.props.navigation.navigate('mymodel');
                },
                3000
            );
        }
    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);

    }}

