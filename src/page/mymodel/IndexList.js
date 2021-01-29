import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    SectionList,
    Text,
    View, TouchableOpacity,
} from 'react-native';
import styles from '../../style/guide'
import Tts from 'react-native-tts';

//这个页面为展示内容的索引，提供二级列表。
//数据结构为List>>group>>title+list
//我的思路是先写一个flatlist然后自己再慢慢改
//列表数据应该从服务器得到

export default class IndexList extends Component{
    constructor() {
        super();
        this.state={
            firstIndex:[
                {
                    key:0,
                    title:'1',
                    data:['第一节','第二节','第三节','第四节']
                    },
                {
                    key:1,
                    title:'2',
                    data:['第一节','第二节','第三节','第四节']},
                {
                    key:2,
                    title:'3',
                    data:['第一节','第二节','第三节','第四节']},
                {
                    key:3,
                    title:'4',
                    data:['第一节','第二节','第三节','第四节']},
                {
                    key:4,
                    title:'5',
                    data:['第一节','第二节','第三节','第四节']},

            ],
            mapList:[
                {
                    chapter:0,
                    section:['Chapter1_1','Chapter1_2']
                }
            ]

        }
    }

    _jump(info){

        console.log(info.section.key+'_'+info.index)
        //从Maplist中获取对应的link即页面名使用push进行跳转
        const pageName = this.state.mapList.find(item=>item.chapter==info.section.key).section[info.index]
        console.log(pageName)
        this.props.navigation.push(pageName)
        //push

    }



    render(){
        const {firstIndex} = this.state;

        return(

            <View style={[styles.indexListBlock]}>
                <SectionList
                    sections={firstIndex}
                    keyExtractor={(item)=>item}
                    //头部
                    renderSectionHeader={({section})=> <View>
                            <Text style={[styles.indexListHeader]}>{section.title}</Text></View>}
                    //列表项目//这里需不需要匿名函数呢
                    renderItem={({item,index,section})=> <View>
                        <TouchableOpacity onPress={()=>this._jump({item,index,section})}>
                            <Text style={[styles.indexListCon]}>{item}</Text></TouchableOpacity></View>}
                    //分界线
                    ItemSeparatorComponent={()=><View style={{borderWidth:1,borderColor:'black'}}></View>}
                />



            </View>

        );




    }
    componentDidMount(){
        Tts.setDefaultPitch(1.5);
        Tts.setDefaultRate(0.1);
        Tts.speak('这里是列表页面，您可以通过点击对应的章节标题进行学习')}
}
