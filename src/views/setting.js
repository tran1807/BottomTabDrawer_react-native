import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function setting({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={{borderWidth:1,width:'100%',height:'7%',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{borderWidth:1,width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}}>
               <TouchableOpacity 
               onPress={()=>{
               navigation.pop(1)
            }}
               >
                <Image source={require('../images/back.png')} style={{}}></Image>
                </TouchableOpacity>
            </View>
            <View style={{borderWidth:1,width:'20%',height:'100%'}}></View>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text  style={{fontSize:25}}>Setting</Text>
        <View style={{width:'50%',height:'8%',borderWidth:1,marginTop:15,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'pink'}}>
           <TouchableOpacity 
            onPress={()=>{
              navigation.popToTop()

            }}
           >
           <Text style={{fontSize:30,fontWeight:'bold'}}>Logout</Text>
           </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}