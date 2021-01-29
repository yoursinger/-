import {Image, View,Text,Animated,Easing} from 'react-native';
import {Component} from 'react';
import * as React from 'react';
import styles from '../../style/guide'

//该组件将若干文字数字顺序显示，每次使用渐隐效果
export default class TextShow extends Component {
    constructor(props) {
        super();
        this.state = {
            myopacity: new Animated.Value(1),
            index: 0,
        };

    }


    render() {
        const {myopacity, textlist1, index} = this.state

        return (
            <Animated.View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                opacity: myopacity}}>
                <Text style={[styles.text]}>{this.props.showlist[index]}</Text>

            </Animated.View>
        );
    }//

    startAnimation() {
        if(this.state.index == (this.props.textlist.length - 1)){
            this.endEvent();
        }
        else {
            this.state.myopacity.setValue(1);
            Animated.timing(this.state.myopacity, {
                toValue: 0,
                duration: 7000,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start(()=>this.startAnimation())
            this.setState({
                index: this.state.index + 1,
            });
        }

        //
    }
    componentDidMount() {
        this.timer = setTimeout(
            () =>{
                this.startAnimation();
            },
            5000
        );
    }


    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);

    }
    endEvent(){
        //处理播放完毕后应该做的事件
        console.log('yeyey');
    }
}
