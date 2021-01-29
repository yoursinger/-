import React,{Component} from 'react';
import {View,Text,Button,Animated,Easing,Image,TouchableOpacity} from 'react-native';
import styles from '../../../style/guide';
import ContentClick from '../../mymodel/ContentClick';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



//1.1点击以及错误返回
export default class Chapter1_1 extends Component {

    constructor() {
        super();
        this.state={
            showlist:
                [
                    <Text style={styles.text_ge}>现在你可以试着点一下这行字</Text>,
                    <Text style={styles.text_ge}>好的，再点一下</Text>,
                    <Text style={styles.text_ge}>没错，这里<Text style={{color: "red"}}>点击</Text>的效果就是显示下一行字</Text>,
                    <Text style={styles.text_ge}>请牢记，接下来的内容都将使用<Text style={{color: "red"}}>点击</Text>进行</Text>,
                    <Text style={styles.text_ge}>注意，要 点下去 再 抬起手指</Text>,
                    <Text style={styles.text_ge}>这才算是完成一次<Text style={{color: "red"}}>点击</Text></Text>,
                    <Text style={styles.text_ge}>当然，我们经常会<Text style={{color: "red"}}>点错地方</Text></Text>,
                    <Text style={styles.text_ge}>让屏幕变成不认识的样子</Text>,
                    <Text style={styles.text_ge}>不要慌，通常只要点击<Text style={{color:"blue"}}>返回键</Text></Text>,
                    <Text style={styles.text_ge}>就会<Text style={{color:"blue"}}>返回</Text>到我们之前的页面了</Text>,
                    <View>
                        <Text style={styles.text_ge}>通常
                            <Text style={{color:"blue"}}>返回键</Text>的样子是这样的：</Text>
                        <View style={{flexDirection:"row",justifyContent:'center'}}>
                            <Image source={require("../../../image/return1.png")}/>
                            <Image source={require("../../../image/return2.png")}/>
                            <Image source={require("../../../image/return3.png")}/>
                        </View>
                    </View>,
                    <Text style={styles.text_ge}>现在，我们来"故意点"错一下</Text>,
                    <View>
                        <Text style={styles.text_ge}>点击下面的“X"</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("errorPage")}}>
                            <Image
                            source={require("../../../image/erorricon.png")}
                            ></Image>
                        </TouchableOpacity>
                    </View>,
                    <Text style={styles.text_ge}>现在你再也不用担心按错了,记住返回键就好</Text>,
                     <Text style={styles.text_ge}>这就是本小节的全部内容了</Text>],

            voiceList:[
                '现在你可以试着点击一下这航字',
                '好的，再点一下',
                '没错，这里点击的效果就是显示下一航字',
                '请牢记，接下来的内容都将使用点击来进行',
                '注意 要点下去，在抬起手指',
                '这才算完成一次点击',
                '当然我们经常会点错地方',
                '让屏幕变成我们不认识的样子',
                '不要慌，通常只需要点击返回键',
                '就会返回到我们之前的页面了',
                '通常返回键的样子是这样的',
                '现在，我们来故意点错一下',
                '点击下面的错号图标',
                '现在你再也不用担心点错地方了，只需要记住返回键就可以了',
                '这就是本小节的全部内容了'
            ]
        }
    }

   render(){

        return(

                <ContentClick showlist={this.state.showlist} voiceList={this.state.voiceList}></ContentClick>

        );
    }
}
