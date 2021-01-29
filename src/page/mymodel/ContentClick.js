import {Image, View,Text,Animated,Easing,TouchableOpacity} from 'react-native';
import {Component} from 'react';
import * as React from 'react';
import styles from '../../style/guide'
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tts from 'react-native-tts';

//该组件将显示一个内容数组并通过点击实现加载下一条
export default class ContentClick extends Component {
    constructor(props) {

        super();
        this.state = {
            myopacity: new Animated.Value(1),
            index: 0,
            voiceRate:0.2,
            voicePitch:2
        };
        //Tts.speak = Tts.speak.bind(this)

    }

//想实现的效果是，点击第一下开始消失并切换到下一个
//感觉需设置一个定时和动画消失时间同步
//不过动画的start似乎自带检测动画结束
    render() {
        const {myopacity,index} = this.state

        return (
            <Animated.View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                opacity: myopacity}} >
                <TouchableOpacity onPress={this.startAnimation.bind(this)}>
                    <View >{this.props.showlist[index]}</View>
                </TouchableOpacity>


            </Animated.View>//这里必须使用bind避免在render渲染的时候调用setstate导致又渲染最后死循环
        );
    }//View没有onpress事件，需要在外面包裹一层TouchableXXX容器

    startAnimation() {


        const index1 = this.state.index+1
        if(this.state.index == (this.props.showlist.length - 1)){
            this.endEvent();
        }
        else {

            this.state.myopacity.setValue(1);
            Animated.timing(this.state.myopacity, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start(() => {

                this.setState({
                    index: this.state.index + 1,

                });

                this.state.myopacity.setValue(1);

                //播报设置

                Tts.setDefaultPitch(this.state.voicePitch);
                Tts.setDefaultRate(this.state.voiceRate);
                Tts.speak(this.props.voiceList[index1])

            })


            }

        }
            //通过这步setvalue解决state.index变化了但它的透明度没变化
            //但为什么state.myopacity的值不能通过Setstate改变呢
            //这里猜测是因为第三方组件的关系


    endEvent(){
        //处理播放完毕后应该做的事件
        alert("章节浏览完毕，请在点击“OK”后使用返回键返回")

    }
    //midmount是渲染完毕执行的生命周期函数
    componentDidMount(){
        Tts.setDefaultPitch(this.state.voicePitch);
        Tts.setDefaultRate(this.state.voiceRate);
        Tts.speak(this.props.voiceList[0])
    }}


