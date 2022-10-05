import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'

 function home({route,navigation}) {
    const{email,title}= route.params;
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <View style={{borderWidth:1,width:'100%',height:'7%',flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={{borderWidth:1,width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}}
           onPress={()=>{
             navigation.goBack()

        }}
        >
            <Image source={require('../images/back.png')} style={{}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}}
           onPress={()=>{
           navigation.navigate('Setting')
        

        }}
        >
            <Image source={require('../images/setting.png')} style={{}}></Image>
        </TouchableOpacity>
    </View>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text  style={{fontSize:25}}>Homescreen</Text>
    <View style={{width:'50%',height:'8%',marginTop:15,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:20}}>Email: <Text>{email}</Text></Text>
       <Text style={{fontSize:20}}>Title: <Text>{title}</Text></Text>
    </View>
    </View>
</SafeAreaView>
  )
}
export default home;