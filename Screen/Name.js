import React from 'react';
import {View,Text,ImageBackground,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import image3 from '../Image/images1.jpeg';
 
export default class Name extends React.Component {

     constructor (props) {
         super (props);
         this.state = {
           playerName1 : '',
           playerName2 : '',
         }
     };

      

    render () {

        return (

            <View style = {Style.Container}>
               <ImageBackground
                   source = {image3}
                   style = {Style.image}
                >
                    <Text style = {Style.text}>ENTER PLAYER NAME</Text>
                        <TextInput 
                          placeholder = ' Player1 '
                          style = {Style.name}
                          maxLength = {8}
                          onChangeText = {(value) => this.setState ({playerName1 : value})}
                         />
                        <TextInput
                          placeholder = ' Player2  '
                          style = {Style.name}
                          maxLength = {8}
                          onChangeText = {(value) => this.setState ({playerName2 : value})}
                         />
                         <TouchableOpacity 
                             style = {Style.tile}
                             onPress = { () => this.props.navigation.navigate ('NewGame',{   
                                   playerName1 : this.state.playerName1,
                                   playerName2 : this.state.playerName2,
                                })
                        
                        }>
                             <Text style = {{color : 'white',fontSize : 22}}> Start Game </Text>
                         </TouchableOpacity>
              </ImageBackground>
            </View>
        )
    }
    }

const Style = StyleSheet.create ({

    Container : {
        flex : 1,
        width : '100%',
        height : '2%',   
        alignItems : 'center',
        justifyContent : 'center',
    },

    name : {
        width : "80%",
        height : 45,
        marginBottom : '6%',
        textAlign : 'center',
        borderWidth :1,
        borderRadius : 40,
        borderColor : "white",
        backgroundColor :"white",
    },

    text : {
        fontSize : 26,
        color : 'white',
        marginBottom : '10%',
        borderColor : 'black',
        textShadowColor:'white',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
        justifyContent : "center"
    },

    tile : {
        width : 260,
        height : 50,
        borderWidth : 1,
        borderRadius : 40,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#00bfff",
        borderColor : "#00bfff",
        textAlign : "center"
    },

    image : {
        height : '100%',
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center' 
    }
})