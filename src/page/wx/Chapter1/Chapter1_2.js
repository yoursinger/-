import React,{Component} from 'react';
import {View,Text,Button,Animated,Easing,Image,TouchableOpacity} from 'react-native';
import styles from '../../../style/guide';
import ContentClick from '../../mymodel/ContentClick';
import {Link} from '@react-navigation/native';


//引入按钮的点击与屏幕抽象
export default class Chapter1_2 extends Component {

    constructor() {
        super();
        this.state={
            showlist:
            [

                <Text style={styles.text_ge}>在上一小节中，我们学了<Text>点击</Text></Text>,
                <View>
                    <Text style={[styles.text_ge,{fontSize:45}]}>如果您还没有完全明白上节的全部内容，可以询问周围的人或</Text>
                    <Button title={'讲解视频'}></Button>
                </View>,
                <Text style={styles.text_ge}>如果您学会了点击，那么我们需要一个点击的对象</Text>,
                <Text style={styles.text_ge}><Text style={{color:'red'}}>按钮</Text>——就是我们将要点击的对象</Text>,
                <Text style={styles.text_ge}>下面我们提供一个手机上最简单的按钮</Text>,
                <Button title={'点击这里'} onPress={()=>this.ContentJumpNext.startAnimation()}></Button>,
                <Text style={styles.text_ge}>一般来说按钮都是容易辨识的，例如</Text>,
                <Text style={styles.text_ge}>微信红包</Text>,
                <Text style={styles.text_ge}>遥控器</Text>,
                <Text style={styles.text_ge}>那么我们进一步想，按钮是可以点击的，那所有可以点击的东西是不是都是按钮</Text>,
                <Text style={styles.text_ge}>于是，我们的手机屏幕就变成了一个铺满按钮的遥控器</Text>,
                <Text style={styles.text_ge}>只是这些按钮看起来各式各样而已</Text>,
                <Text style={styles.text_ge}>想象一下，您的电视遥控器被绑在电视屏幕上</Text>,
                <Text style={styles.text_ge}>您每次换台都需要摸着电视屏幕的某个地方</Text>,
                <Text style={styles.text_ge}>图片</Text>,
                <Text style={[styles.text_ge,{fontSize:45}]}>本小节到此结束，在本节中您需要着重理解的有：按钮，手机屏幕与电视屏幕的区别，请仔细思考：“电视遥控器和手机有什么相同之处？”</Text>,




            ]
        }
    }


    render(){
        return(
            <ContentClick showlist={this.state.showlist}  ref={(v)=>this.ContentJumpNext=v}></ContentClick>

        )
    }



}
