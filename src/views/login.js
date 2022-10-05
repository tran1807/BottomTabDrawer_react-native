import { StyleSheet,TextInput, Text, View,SafeAreaView,TouchableOpacity,ImageBackground,Image ,StatusBar, Dimensions} from 'react-native'
import React,{Component,useState} from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 function login({navigation}) {
  const[getPasswordVisible,setPasswordVisible] = useState(false)
  return (
    <ImageBackground style={{height:'100%',width:'100%'}} source={require('../images/anh.jpg')} resizeMode='stretch'>
       <StatusBar barStyle='light-content'/>
       <SafeAreaView style={{flex:1}}>
        <View style={{width:'100%',height:'100%'}}>
           <View style={{width:'100%',height:'30%',marginTop:0.3*windowHeight,alignItems:'center'}}>
           <View style={{width:'70%',height:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           <Text style={{color:'black'}}>Email : </Text>
           <TextInput style ={{height:'100%',width:'70%',borderBottomColor:'black',borderBottomWidth:1,textAlign:'right'}}
           autoCapitalize='none'
           />
           </View>
           <View style={{width:'70%',height:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
           <Text style={{color:'black'}}>Password : </Text>
           <TextInput style ={{height:'100%',width:'70%',borderBottomColor:'black',borderBottomWidth:1,textAlign:'right',paddingRight:40}}
           autoCapitalize='none' secureTextEntry={getPasswordVisible ? false : true}
           />
           <TouchableOpacity style={{height:'100%',width:30, aspectRatio:1,position:'absolute',right:0}}
               onPress={() => {
                setPasswordVisible(!getPasswordVisible)
               }}
           >
            {getPasswordVisible ?
            <Image source={require('../images/visibility.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}}></Image>
            :
           <Image source={require('../images/invisible.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}}></Image>
          }
           </TouchableOpacity>
           </View>
        </View>  
           <View style={{width:'100%',height:'20%',marginTop:0.01*windowHeight,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{width:'60%',height:'30%',borderWidth:1,borderRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}
              onPress={()=>{
                navigation.navigate('Home',{
                 email:'nhutranle59@gmail.com',
                 title:'Trân Công Tử'
                })
              }}
              >
                <Text style={{fontSize:25,fontWeight:'bold'}}>Đăng nhập</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={{width:'60%',height:'30%',borderWidth:1,marginTop:20,borderRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
                  <Text style={{fontSize:25,fontWeight:'bold'}}>Đăng kí</Text>
                </TouchableOpacity>     

           </View>
        </View>
           
       </SafeAreaView>
    </ImageBackground>
  )
}

export default login;