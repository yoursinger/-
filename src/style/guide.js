import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text_ge:{
        fontSize: 65,
        padding: 20,
        textAlign: 'center',

    },
    text_home:{
        fontSize: 40,
        padding: 5,
        textAlign: 'center',
        color:"white"
    },
    home_block:{
        flex:1,
        width:150,
        height:160,
        justifyContent:"space-around",
        alignItems: "center",
        margin:10,
        borderRadius:20,
    },
    home_row:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",

    },
    home:{
        flex:1,
        alignItems:"stretch",
        justifyContent:"center"
    },
    indexListBlock:{
        flex:1,

    },
    indexListHeader:{
        flex:1,
        fontSize:40
    },
    indexListCon: {
        flex: 1,
        fontSize: 20,
        padding: 5,


    }
});

export default styles;
