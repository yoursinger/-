import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../Welcome/Welcome';
import Guide from '../mymodel/TextShow';
import Chapter1 from '../wx/Chapter1/Chapter1_1';
import ChapterTitle from '../wx/Chapter1/Chapter1_1';
import errorPage from '../wx/Chapter1/erorrPage';
import Home from '../Home/Home';
import IndexList from '../mymodel/IndexList';
import Chapter1_1 from '../wx/Chapter1/Chapter1_1';
import Chapter1_2 from '../wx/Chapter1/Chapter1_2';
const Stack=createStackNavigator();

function NavigationComponent(){
    return(
        <NavigationContainer>
            <Stack.Navigator options={{}}>
                {/*<Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>*/}
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Chapter1_1" component={Chapter1_1} options={{headerShown:false}}/>
                <Stack.Screen name="IndexList" component={IndexList}/>


                <Stack.Screen name="Guide" component={Guide} options={{headerShown:false}} />
                <Stack.Screen name="errorPage" component={errorPage}/>

                <Stack.Screen name="Chapter1_2" component={Chapter1_2} options={{headerShown:false}}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export  default NavigationComponent;
