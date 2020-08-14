import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import image2 from '../Image/image6.jpg'; 
import image3 from '../Image/images1.jpeg';

 handleClick = () => {  
   RNExitApp.exitApp(0);
 }

export default class Home extends React.Component {

     render () {

          return (
        <View style = {Style.Container}>
           <ImageBackground
                 source = {image3}
                 style = {{height : '100%',width : '100%',justifyContent : 'center',alignItems : 'center' }}
                 >
               <Image
                 source = {image2}
                 style = {Style.image}
                   />
             <View style = {Style.menu}>
                <TouchableOpacity 
                    style = {Style.tile}
                    onPress = {() => this.props.navigation.navigate ('Name')}
                    >
                      <Text style = {{color : 'white',fontSize : 27}}> NewGame </Text>
                    </TouchableOpacity>
                <TouchableOpacity 
                    style = {[Style.tile,{marginTop : '3%'}]}
                    onPress = {() => handleClick ()}
                    >
                      <Text style = {{color : 'white',fontSize : 27}}> ExitGame </Text>
                    </TouchableOpacity>
             </View>
            </ImageBackground>
        </View>
    );
   }
 }

 const Style = StyleSheet.create ({

  container: {
    width : "100%",
    height : "100%",
    alignItems : "center",
    justifyContent : "center",
    alignSelf : "center",
    alignContent : "center",
  },

   menu : {
    top : '6%'
   },
   
   image : {
    height : 250,
    width : 165,
    marginHorizontal : 20,
    marginBottom : 50,
    borderWidth : 3,
    borderColor : 'black',
    borderBottomLeftRadius:30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15
 },
 tile : {
  width : 280,
  height : 50,
  borderWidth : 1,
  borderRadius : 40,
  alignItems : "center",
  justifyContent : "center",
  alignSelf : "center",
  alignContent : "center",
  backgroundColor : "#00bfff",
  borderColor : "#00bfff",
  textAlign : "center"
},

 })