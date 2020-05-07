import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screen/Home';
import Game from './Screen/Game';
import Name from './Screen/Name';
import Splash from './Screen/Splash'; 

export default class App extends React.Component {
    render () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'Splash' >
                <Stack.Screen 
                   name = 'Splash' 
                   component = {Splash} 
                   options = {{
                       headerShown : false,
                   }}
                   />
                <Stack.Screen 
                   name = 'Home' 
                   component = {Home}
                   options = {{ 
                       headerShown : false,
                   }}/>
                <Stack.Screen 
                   name = 'NewGame' 
                   component = {Game}
                   options = {{
                      title : 'Back',
                      headerStyle : {backgroundColor : 'gray'},
                      headerTintColor : '#ffffff', 
                      headerTitleStyle : {fontWeight : "bold"}
                   }}
                   />
                <Stack.Screen 
                   name = 'Name' 
                   component = {Name}
                   options = {{
                      title : 'Back',
                      headerStyle : {backgroundColor : 'gray'},
                      headerTintColor : '#ffffff', 
                      headerTitleStyle : {fontWeight : "bold"}
                   }}
                   />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
}
const Stack = createStackNavigator ();

