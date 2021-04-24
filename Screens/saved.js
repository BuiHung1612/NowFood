import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Services from '../components/Services';
const Saved = () => {
    const [text,setText]=useState('Dịch vụ')
    const [onClick,setOnClick]=useState(false)
    const onHandlePress=(item)=>{
        setOnClick(!onClick)
      }
   
    const show=(item)=>{
  
      setText(item)
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>Đã lưu</Text>
            </View>
            <View style={styles.serviceBox}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={onHandlePress}>
               <Text style={styles.text1}>{text}</Text>
               <Ionicons name="chevron-down-outline" size={17} color="#000" style={{top:15,left:3}}/>
               </TouchableOpacity>
            </View>
            <View style={styles.contain}>
       
                <Image source={{uri:"https://images.foody.vn/res/g103/1025005/prof/s576x330/foody-upload-api-foody-mobile-hmzz-200522103018.jpg"}} style={styles.image}/>
                <Text style={{fontSize:18,fontWeight:'bold',marginTop:10}}>Thả tim vào quán bạn yêu nào!</Text>
                <Text style={{fontSize:16,width:'80%',color:'#969696',marginTop:10}}>Hãy lấp đầy dạ dày bằng một trái tim xinh. Thả tim(icon)để lưu lại quán ngon bạn thích nhé!</Text>
            
            </View>
            <Services enable={onClick} toggle={onHandlePress} onsend={show}/>
        </View>
    )
}

export default Saved

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerTextBox:{
        flex:0.07,
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold'
    },
    serviceBox:{
        flex:0.06,
        backgroundColor:'#F5F6F8',
        
    },
    text1:{
        fontSize:17,
        marginTop:12,
        marginLeft:12,
        fontWeight:'600'
    },
    contain:{
        flex:0.87,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:160,
        height:160,
        borderRadius:80
    }

})
